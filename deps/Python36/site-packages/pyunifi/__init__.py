
def http_debug_log_stderr():
    """Dump requests urllib3 debug messages to stderr"""
    import requests
    requests.packages.urllib3.add_stderr_logger()
