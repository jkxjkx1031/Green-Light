from django.shortcuts import get_list_or_404
from django.utils import timezone
from django.db import transaction
from .models import EnergyAccount, EnergyHistory
from .settings import TOTAL_CC_SCATTER_DAILY

@transaction.atomic()
def energy_gather():
    ea_objects = get_list_or_404(EnergyAccount)
    recorded_level = []
    for ea in ea_objects:
        recorded_level.append(ea.energy_level())
    sum_of_level = sum(recorded_level)
    for (idx, ea) in enumerate(ea_objects):
        if recorded_level[idx] != 0:
            reward = int(TOTAL_CC_SCATTER_DAILY * recorded_level[idx] / sum_of_level)
        else:
            reward = 0
        try:
            with transaction.atomic():
                record = EnergyHistory(ea=ea, energy=ea.energy, reward=reward, date=timezone.now().date())
                ea.account.asset += reward
                ea.account.save()
                ea.energy = 0
                ea.reward = reward
                ea.last_refreshed = timezone.now()
                ea.save()
                record.save()
            print('%s: %s +%d | asset: %d;' % (timezone.now(), ea.account.user.username, reward, ea.account.asset))
        except:
            print('%s: %s error;' % (timezone.now(), ea.account.user.username))
