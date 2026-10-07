"""Local static preview with branded 404s; no API implementation or rewrite."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import os

ROOT = Path(__file__).resolve().parent.parent

class Preview(SimpleHTTPRequestHandler):
    def send_error(self, code, message=None, explain=None):
        if code != 404 or self.path.split('?')[0].startswith('/api/') or self.path.split('?')[0] == '/api':
            return super().send_error(code, message, explain)
        body = (ROOT / '404.html').read_bytes()
        self.send_response(404)
        self.send_header('Content-Type', 'text/html; charset=utf-8')
        self.send_header('X-Robots-Tag', 'noindex')
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        if self.command != 'HEAD':
            self.wfile.write(body)

if __name__ == '__main__':
    os.chdir(ROOT)
    print('Preview: http://127.0.0.1:4174', flush=True)
    ThreadingHTTPServer(('127.0.0.1', 4174), Preview).serve_forever()
