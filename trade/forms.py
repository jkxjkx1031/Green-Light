from django import forms


class LoginForm(forms.Form):
    username = forms.CharField(
        required = True,
        label = "Username",
        widget = forms.TextInput(
            attrs = {
                "placeholder": "username"
            }
        )
    )

    passwd = forms.CharField(
        required = True,
        label = "password",
        widget = forms.PasswordInput(
            attrs = {
                "placeholder": "password"
            }
        )
    )