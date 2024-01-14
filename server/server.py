import eventlet
import socketio
import sys, os


class Server:
    def __init__(self):
        self.sio = socketio.Server()
        self.app = socketio.WSGIApp(self.sio, static_files={
            '/': 'server/public/index.html',
        })
        self.call_backs()
        print(os.getcwd())
        print(sys.argv[0])
        eventlet.wsgi.server(eventlet.listen(('localhost', 8080)), self.app)

    def call_backs(self):
        @self.sio.event
        def connect(sid, environ):
            print('connect ', sid)

        @self.sio.event
        def my_message(sid, data):
            print('message ', data)

        @self.sio.event
        def disconnect(sid):
            print('disconnect ', sid)


def Run():
    server = Server()
