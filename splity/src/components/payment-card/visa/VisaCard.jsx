import "./VisaCard.css";

const VisaCard = ({ card_number, name, expiry, cvc }) => {
    return (
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front_1">
            <p className="heading_2">VISA</p>
            <svg 
                className="logo_1"
                width="24" 
                height="16" 
                viewBox="0 0 24 16" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_9_1678)">
                    <path d="M0 2C0 0.895431 0.895431 0 2 0H22C23.1046 0 24 0.895431 24 2V14C24 15.1046 23.1046 16 22 16H2C0.89543 16 0 15.1046 0 14V2Z" fill="#0C1727"/>
                    <path d="M20.655 5.01751H19.3977C19.0175 5.01751 18.7251 5.13447 18.5497 5.51459L16.152 10.9824H17.848C17.848 10.9824 18.1404 10.2514 18.1988 10.076C18.3743 10.076 20.0409 10.076 20.2749 10.076C20.3333 10.2807 20.4795 10.9532 20.4795 10.9532H22L20.655 5.01751ZM18.6667 8.84792C18.8129 8.49704 19.3099 7.18125 19.3099 7.18125C19.3099 7.21049 19.4561 6.83038 19.5146 6.6257L19.6316 7.15201C19.6316 7.15201 19.9532 8.58476 20.0117 8.87716H18.6667V8.84792Z" fill="#3362AB"/>
                    <path d="M16.269 9.02338C16.269 10.2514 15.1579 11.0702 13.4327 11.0702C12.7018 11.0702 12 10.924 11.6199 10.7485L11.8538 9.40349L12.0585 9.49121C12.5848 9.72513 12.9357 9.81285 13.5789 9.81285C14.0468 9.81285 14.5439 9.63741 14.5439 9.22806C14.5439 8.9649 14.3392 8.78946 13.6959 8.49706C13.0819 8.20466 12.2632 7.73683 12.2632 6.88887C12.2632 5.71928 13.4035 4.92981 15.0117 4.92981C15.6257 4.92981 16.152 5.04677 16.4737 5.19297L16.2398 6.47952L16.1228 6.36256C15.8304 6.2456 15.4503 6.12864 14.8947 6.12864C14.2807 6.15788 13.9883 6.42104 13.9883 6.65496C13.9883 6.91811 14.3392 7.12279 14.8947 7.38595C15.8304 7.82455 16.269 8.32162 16.269 9.02338Z" fill="#3362AB"/>
                    <path d="M2 5.07603L2.02924 4.95907H4.54386C4.89474 4.95907 5.15789 5.07603 5.24561 5.45614L5.80117 8.08772C5.24561 6.68421 3.95906 5.54386 2 5.07603Z" fill="#F9B50B"/>
                    <path d="M9.33918 5.01753L6.79532 10.9532H5.07017L3.60819 5.98244C4.66082 6.65496 5.53801 7.70759 5.85965 8.43858L6.03509 9.05262L7.61403 4.98829H9.33918V5.01753Z" fill="#3362AB"/>
                    <path d="M10.0117 4.98829H11.6199L10.5965 10.9532H8.98831L10.0117 4.98829Z" fill="#3362AB"/>
                </g>
                <defs>
                    <clipPath id="clip0_9_1678">
                        <rect width="24" height="16" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
            <svg
              version="1.1"
              className="chip_1"
              id="Layer_1"
              x="0px"
              y="0px"
              width="30px"
              height="30px"
              viewBox="0 0 50 50"
            >
              <image
                id="image0"
                width="50"
                height="50"
                x="0"
                y="0"
                href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
                AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB6VBMVEUAAACNcTiVeUKVeUOY
                fEaafEeUeUSYfEWZfEaykleyklaXe0SWekSZZjOYfEWYe0WXfUWXe0WcgEicfkiXe0SVekSXekSW
                ekKYe0a9nF67m12ZfUWUeEaXfESVekOdgEmVeUWWekSniU+VeUKVeUOrjFKYfEWliE6WeESZe0GS
                e0WYfES7ml2Xe0WXeESUeEOWfEWcf0eWfESXe0SXfEWYekSVeUKXfEWxklawkVaZfEWWekOUekOW
                ekSYfESZe0eXekWYfEWZe0WZe0eVeUSWeETAnmDCoWLJpmbxy4P1zoXwyoLIpWbjvXjivnjgu3bf
                u3beunWvkFWxkle/nmDivXiWekTnwXvkwHrCoWOuj1SXe0TEo2TDo2PlwHratnKZfEbQrWvPrWua
                fUfbt3PJp2agg0v0zYX0zYSfgkvKp2frxX7mwHrlv3rsxn/yzIPgvHfduXWXe0XuyIDzzISsjVO1
                lVm0lFitjVPzzIPqxX7duna0lVncuHTLqGjvyIHeuXXxyYGZfUayk1iyk1e2lln1zYTEomO2llrb
                tnOafkjFpGSbfkfZtXLhvHfkv3nqxH3mwXujhU3KqWizlFilh06khk2fgkqsjlPHpWXJp2erjVOh
                g0yWe0SliE+XekShhEvAn2D///+gx8TWAAAARnRSTlMACVCTtsRl7Pv7+vxkBab7pZv5+ZlL/UnU
                /f3SJCVe+Fx39naA9/75XSMh0/3SSkia+pil/KRj7Pr662JPkrbP7OLQ0JFOijI1MwAAAAFiS0dE
                orDd34wAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfnAg0IDx2lsiuJAAACLElEQVRIx2Ng
                GAXkAUYmZhZWPICFmYkRVQcbOwenmzse4MbFzc6DpIGXj8PD04sA8PbhF+CFaxEU8iWkAQT8hEVg
                OkTF/InR4eUVICYO1SIhCRMLDAoKDvFDVhUaEhwUFAjjSUlDdMiEhcOEItzdI6OiYxA6YqODIt3d
                I2DcuDBZsBY5eVTr4xMSYcyk5BRUOXkFsBZFJTQnp6alQxgZmVloUkrKYC0qqmji2WE5EEZuWB6a
                lKoKdi35YQUQRkFYPpFaCouKIYzi6EDitJSUlsGY5RWVRGjJLyxNy4ZxqtIqqvOxaVELQwZFZdkI
                JVU1RSiSalAt6rUwUBdWG1CP6pT6gNqwOrgCdQyHNYR5YQFhDXj8MiK1IAeyN6aORiyBjByVTc0F
                qBoKWpqwRCVSgilOaY2OaUPw29qjOzqLvTAchpos47u6EZyYnngUSRwpuTe6D+6qaFQdOPNLRzOM
                1dzhRZyW+CZouHk3dWLXglFcFIflQhj9YWjJGlZcaKAVSvjyPrRQ0oQVKDAQHlYFYUwIm4gqExGm
                BSkutaVQJeomwViTJqPK6OhCy2Q9sQBk8cY0DxjTJw0lAQWK6cOKfgNhpKK7ZMpUeF3jPa28BCET
                amiEqJKM+X1gxvWXpoUjVIVPnwErw71nmpgiqiQGBjNzbgs3j1nus+fMndc+Cwm0T52/oNR9lsdC
                S24ra7Tq1cbWjpXV3sHRCb1idXZ0sGdltXNxRateRwHRAACYHutzk/2I5QAAACV0RVh0ZGF0ZTpj
                cmVhdGUAMjAyMy0wMi0xM1QwODoxNToyOSswMDowMEUnN7UAAAAldEVYdGRhdGU6bW9kaWZ5ADIw
                MjMtMDItMTNUMDg6MTU6MjkrMDA6MDA0eo8JAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTAy
                LTEzVDA4OjE1OjI5KzAwOjAwY2+u1gAAAABJRU5ErkJggg=="
              ></image>
            </svg>
            
            <p className="number_1">{card_number}</p>
            <p className="valid_thru_1">VALID THRU</p>
            <p className="date_1">
              {expiry.month ? expiry.month : "XX"} /{" "}
              {expiry.year ? expiry.year.slice(-2) : "XX"}
            </p>
            <p className="name_1">{name ? name : "YOUR NAME"}</p>
          </div>
          <div className="flip-card-back_1">
            <div className="strip"></div>
            <div className="mstrip"></div>
            <div className="sstrip">
              <p className="code">{cvc ? cvc : "XXX"}</p>
            </div>
            <svg
              version="1.1"
              className="contactless_1"
              id="Layer_1"
              x="0px"
              y="0px"
              width="20px"
              height="20px"
              viewBox="0 0 50 50"
              color="black"
            >
              <image
                id="image0"
                width="50"
                height="50"
                x="0"
                y="0"
                href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAAABGdBTUEAALGPC/xhBQAAACBjSFJN
                AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZ
                cwAACxMAAAsTAQCanBgAAAAHdElNRQfnAg0IEzgIwaKTAAADDklEQVRYw+1XS0iUURQ+f5qPyjQf
                lGRFEEFK76koKGxRbWyVVLSOgsCgwjZBJJYuKogSIoOonUK4q3U0WVBWFPZYiIE6kuArG3VGzK/F
                fPeMM/MLt99/NuHdfPd888/57jn3nvsQWWj/VcMlvMMd5KRTogqx9iCdIjUUmcGR9ImUYowyP3xN
                GQJoRLVaZ2DaZf8kyjEJALhI28ELioyiwC+Rc3QZwRYyO/DH51hQgWm6DMIh10KmD4u9O16K49it
                VoPOAmcGAWWOepXIRScAoJZ2Frro8oN+EyTT6lWkkg6msZfMSR35QTJmjU0g15tIGSJ08ZZMJkJk
                HpNZgSkyXosS13TkJpZ62mPIJvOSzC1bp8vRhhCakEk7G9/o4gmZdbpsTcKu0m63FbnBP9Qrc15z
                bkbemfgNDtEOI8NO5L5O9VYyRYgmJayZ9nPaxZrSjW4+F6Uw9yQqIiIZwhp2huQTf6OIvCZyGM6g
                DJBZbyXifJXr7FZjGXsdxADxI7HUJFB6iWvsIhFpkoiIiGTJfjJfiCuJg2ZEspq9EHGVpYgzKqwJ
                qSAOEwuJQ/pxPvE3cYltJCLdxBLiSKKIE5HxJKcTRNeadxfhDiuYw44zVs1dxKwRk/uCxIiQkxKB
                sSctRVAge9g1E15EHE6yRUaJecRxcWlukdRIbGFOSZCMWQA/iWauIP3slREHXPyliqBcrrD71Amz
                Z+rD1Mt2Yr8TZc/UR4/YtFnbijnHi3UrN9vKQ9rPaJf867ZiaqDB+czeKYmd3pNa6fuI75MiC0uX
                XSR5aEMf7s7a6r/PudVXkjFb/SsrCRfROk0Fx6+H1i9kkTGn/E1vEmt1m089fh+RKdQ5O+xNJPUi
                cUIjO0Dm7HwvErEr0YxeibL1StSh37STafE4I7zcBdRq1DiOkdmlTJVnkQTBTS7X1FYyvfO4piaI
                nKbDCDaT2anLudYXCRFsQBgAcIF2/Okwgvz5+Z4tsw118dzruvIvjhTB+HOuWy8UvovEH6beitBK
                xDyxm9MmISKCWrzB7bSlaqGlsf0FC0gMjzTg6GgAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDIt
                MTNUMDg6MTk6NTYrMDA6MDCjlq7LAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTAyLTEzVDA4OjE5
                OjU2KzAwOjAw0ssWdwAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMy0wMi0xM1QwODoxOTo1Nisw
                MDowMIXeN6gAAAAASUVORK5CYII="
              ></image>
            </svg>
          </div>
        </div>
      </div>
    );
  };
  
  export default VisaCard;
  