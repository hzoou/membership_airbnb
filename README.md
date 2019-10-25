<h1 align="center">Welcome to membership-airbnb 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/hzoou/membership-airbnb#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/hzoou/membership-airbnb/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/hzoou/membership-airbnb/blob/master/LICENSE" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/github/license/hzoou/membership-airbnb" />
  </a>
</p>

### 2019 BoostCamp Membership Mission 4
#### server directory structure
  ```
  server
  ├── 📂 bin
  |   └── 📄 www
  ├── 📂 config
  |   └── 📄 config.js
  ├── 📂 dummy
  |   └── 📄 room-data.js
  ├── 📂 middlewares
  |   └── 📄 auth.js
  |   └── 📄 passport.js
  |   └── 📄 reservation.js
  |   └── 📄 room.js
  |   └── 📄 user.js
  ├── 📂 models
  |   └── 📄 index.js
  |   └── 📄 reservation.js
  |   └── 📄 room.js
  |   └── 📄 user.js
  ├── 📂 routes
  |   └── 📄 index.js
  |   └── 📄 login.js
  |   └── 📄 logout.js
  |   └── 📄 reservation.js
  |   └── 📄 room.js
  ├── 📂 seeders
  |   └── 📄 20191016054017-room.js
  └── 📄 app.js
  ```

#### .env에서 사용하는 환경변수
> DB_USERNAME=remote
> DB_PASSWORD=boostcamp2019\
> DB_DATABASE=airbnb\
> DB_HOST=127.0.0.1\
> GOOGLE_CLIENT_ID=\
> GOOGLE_CLIENT_SECRET=\
> JWT_SECRET=

#### API
- [ROOM API](https://github.com/hzoou/membership-airbnb/wiki/ROOM-API)
- [RESERVATION API](https://github.com/hzoou/membership-airbnb/wiki/RESERVATION-API)

#### Priview
> 메인 화면 (로그인 하지 않은 경우)
> 
![](https://i.imgur.com/hfZqHnA.jpg)

> 메인 화면 (구글 로그인 한 경우)
> 
![](https://i.imgur.com/TkOepsY.jpg)


> 날짜 필터 클릭
> 
![](https://i.imgur.com/E4U3q9s.png)

> 인원 필터 클릭
>
![](https://i.imgur.com/auEHbue.jpg)

> 숙소 유형 필터 클릭
> 
![](https://i.imgur.com/qk4vM0R.jpg)

> 가격 필터 클릭
> 
![](https://i.imgur.com/NgraFhT.jpg)

> 필터 추가하기 필터 클릭
> 
![](https://i.imgur.com/TNWnhKm.jpg)




### 🏠 [Homepage](https://github.com/hzoou/membership-airbnb#readme)

## Install

```sh
cd server
npm install
```

## Run

```sh
npm start
```

## Version
```shell script
npm 6.9.0
node 10.16.3
mysql 8.0.17
sequelize 5.19.6
```

## Author

👤 **hzoou (Woo hyeju)**

* Github: [@hzoou](https://github.com/hzoou)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/hzoou/membership-airbnb/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2019 [hzoou (Woo hyeju)](https://github.com/hzoou).<br />
This project is [ISC](https://github.com/hzoou/membership-airbnb/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_