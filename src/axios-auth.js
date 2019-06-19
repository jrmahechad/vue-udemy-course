import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://vue-course-axios-aefda.firebaseio.com/',
});

instance.defaults.headers.common['SOMETHING'] = 'something';

export default instance;