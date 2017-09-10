#!c:\users\moose\appdata\local\programs\python\python36-32\python.exe
# EASY-INSTALL-ENTRY-SCRIPT: 'py-vapid==1.2.5','console_scripts','vapid'
__requires__ = 'py-vapid==1.2.5'
import re
import sys
from pkg_resources import load_entry_point

if __name__ == '__main__':
    sys.argv[0] = re.sub(r'(-script\.pyw?|\.exe)?$', '', sys.argv[0])
    sys.exit(
        load_entry_point('py-vapid==1.2.5', 'console_scripts', 'vapid')()
    )
