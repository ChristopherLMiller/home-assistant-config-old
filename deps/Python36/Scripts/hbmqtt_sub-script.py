#!c:\users\moose\appdata\local\programs\python\python36-32\python.exe
# EASY-INSTALL-ENTRY-SCRIPT: 'hbmqtt==0.8','console_scripts','hbmqtt_sub'
__requires__ = 'hbmqtt==0.8'
import re
import sys
from pkg_resources import load_entry_point

if __name__ == '__main__':
    sys.argv[0] = re.sub(r'(-script\.pyw?|\.exe)?$', '', sys.argv[0])
    sys.exit(
        load_entry_point('hbmqtt==0.8', 'console_scripts', 'hbmqtt_sub')()
    )
