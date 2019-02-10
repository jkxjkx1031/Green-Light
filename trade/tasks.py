from django.shortcuts import get_list_or_404
from django.utils import timezone
from .models import EnergyAccount

def energy_gather():
    ea_objects = get_list_or_404(EnergyAccount)
    recorded_level = []
    for ea in ea_objects:
        recorded_level.append(ea.energy_level())
        ea.energy = 0
        ea.last_refreshed = timezone.now()
        ea.save()
    sum_of_level = sum(recorded_level)
    for (idx, ea) in enumerate(ea_objects):
        if recorded_level[idx] != 0:
            ea.account.asset += int(10000 * recorded_level[idx] / sum_of_level)
            # total amount of C-coin scattered needs to be defined
            ea.account.save()
