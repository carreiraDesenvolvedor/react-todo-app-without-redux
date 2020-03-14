var portApi = 3003

var _MAIN_URL = `http://localhost:${portApi}/api/`

export default props =>
    (
        {
            _MAIN_URL: _MAIN_URL,
            _TODOS : _MAIN_URL + 'todos'
        }
    )