import "./UnionCard.css";

const UnionCard = ({ card_number, name, expiry, cvc }) => {
    return (
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front_3">
            <p className="heading_3">UNION</p>
            <svg 
                className="logo_3"
                width="24" 
                height="16" 
                viewBox="0 0 24 16" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_9_1648)">
                    <path d="M0 2C0 0.895431 0.895431 0 2 0H22C23.1046 0 24 0.895431 24 2V14C24 15.1046 23.1046 16 22 16H2C0.89543 16 0 15.1046 0 14V2Z" fill="#2E050B"/>
                    <path d="M6.16539 2.00067H10.9533C11.6217 2.00067 12.0374 2.54544 11.8815 3.21601L9.65235 12.7866C9.49503 13.4548 8.82586 14 8.15704 14H3.36955C2.70213 14 2.2855 13.4548 2.44141 12.7866L4.67148 3.21601C4.8274 2.54544 5.49622 2.00067 6.16539 2.00067Z" fill="#E21836"/>
                    <path d="M10.5547 2H16.0607C16.7289 2 16.4276 2.54477 16.2704 3.21534L14.0416 12.7859C13.8852 13.4541 13.934 13.9994 13.2644 13.9994H7.75836C7.08872 13.9994 6.67431 13.4541 6.83162 12.7859L9.06029 3.21534C9.21854 2.54477 9.88596 2 10.5547 2Z" fill="#00447C"/>
                    <path d="M15.8423 2H20.6303C21.2996 2 21.7153 2.54477 21.5581 3.21534L19.3293 12.7859C19.172 13.4541 18.5023 13.9994 17.8332 13.9994H13.0474C12.3778 13.9994 11.9624 13.4541 12.1193 12.7859L14.3484 3.21534C14.5043 2.54477 15.1727 2 15.8423 2Z" fill="#007B84"/>
                    <path d="M7.41556 5.06707C6.92319 5.07209 6.77778 5.06707 6.73133 5.0561C6.71347 5.14094 6.38122 6.6736 6.38029 6.67488C6.30875 6.98496 6.2567 7.20599 6.0799 7.34872C5.97953 7.4317 5.86236 7.47172 5.72652 7.47172C5.50817 7.47172 5.38096 7.36331 5.35961 7.15768L5.35552 7.08707C5.35552 7.08707 5.42204 6.67173 5.42204 6.6694C5.42204 6.6694 5.77075 5.2727 5.83319 5.08808C5.83645 5.07757 5.83739 5.07209 5.8382 5.06707C5.15946 5.07302 5.03914 5.06707 5.03086 5.0561C5.0263 5.07115 5.0095 5.15775 5.0095 5.15775L4.65344 6.73195L4.62286 6.86546L4.5637 7.30216C4.5637 7.4317 4.58914 7.53743 4.63979 7.62682C4.802 7.91029 5.26473 7.95277 5.52649 7.95277C5.86376 7.95277 6.18014 7.88112 6.39394 7.75029C6.76506 7.53101 6.86215 7.18825 6.94875 6.88366L6.98889 6.7274C6.98889 6.7274 7.3481 5.27678 7.40914 5.08808C7.41147 5.07757 7.41241 5.07209 7.41556 5.06707ZM8.63775 6.23729C8.55115 6.23729 8.3929 6.2583 8.25076 6.32797C8.19918 6.35446 8.1504 6.38504 8.09893 6.4155L8.14538 6.2478L8.11994 6.21955C7.81849 6.28059 7.75104 6.28876 7.47259 6.32797L7.44925 6.34349C7.41692 6.61156 7.38821 6.8131 7.26836 7.34001C7.22273 7.53421 7.17535 7.73027 7.12785 7.92399L7.14069 7.94862C7.42602 7.93356 7.51262 7.93356 7.76061 7.93765L7.78068 7.91583C7.81219 7.75443 7.81628 7.71661 7.88607 7.38973C7.91886 7.23475 7.98725 6.89421 8.02097 6.77296C8.08294 6.74425 8.14409 6.71601 8.20245 6.71601C8.34144 6.71601 8.32452 6.83726 8.31915 6.88558C8.3132 6.96668 8.26255 7.2316 8.21062 7.45905L8.17595 7.60586C8.1518 7.71428 8.12531 7.81966 8.10115 7.92715L8.11165 7.94862C8.3929 7.93356 8.47868 7.93356 8.71885 7.93765L8.7471 7.91583C8.79051 7.66375 8.80323 7.59629 8.88025 7.22926L8.919 7.06063C8.99427 6.73059 9.03208 6.56324 8.97513 6.42693C8.91491 6.27417 8.77044 6.23729 8.63775 6.23729ZM10.0031 6.58284C9.85358 6.61155 9.75823 6.63068 9.66347 6.64306C9.56952 6.65811 9.47791 6.67176 9.33343 6.69184L9.322 6.70222L9.31149 6.71051C9.29644 6.81811 9.28594 6.91112 9.26598 7.02047C9.24906 7.13356 9.22303 7.26205 9.18067 7.44667C9.14788 7.588 9.13095 7.63724 9.11228 7.68696C9.09408 7.73667 9.074 7.78499 9.03713 7.92398L9.04576 7.93682L9.053 7.94861C9.18802 7.94219 9.27637 7.93764 9.36716 7.93682C9.45784 7.93355 9.55178 7.93682 9.6972 7.93764L9.70992 7.92725L9.72357 7.91581C9.74458 7.79047 9.74773 7.75675 9.76056 7.6956C9.77329 7.63001 9.79523 7.53921 9.84902 7.29671C9.87447 7.1828 9.90282 7.06925 9.9292 6.95302C9.95662 6.83725 9.98533 6.72323 10.0126 6.60933L10.0086 6.59556L10.0031 6.58284ZM10.0063 6.11694C9.87042 6.03676 9.63199 6.0622 9.47153 6.17295C9.31153 6.28149 9.29332 6.43553 9.4287 6.51676C9.56221 6.59472 9.80156 6.57149 9.96063 6.45981C10.1203 6.34894 10.1402 6.19629 10.0063 6.11694ZM10.8278 7.97373C11.1026 7.97373 11.3843 7.89799 11.5964 7.67322C11.7595 7.49093 11.8343 7.21972 11.8603 7.10803C11.9446 6.73785 11.8789 6.56502 11.7964 6.45975C11.6711 6.29928 11.4496 6.24782 11.2198 6.24782C11.0816 6.24782 10.7525 6.26147 10.4954 6.4985C10.3108 6.66947 10.2255 6.90147 10.174 7.1239C10.1221 7.35054 10.0623 7.75853 10.4375 7.91036C10.5533 7.96008 10.7202 7.97373 10.8278 7.97373ZM10.8063 7.14083C10.8697 6.86051 10.9445 6.62523 11.1354 6.62523C11.285 6.62523 11.2959 6.80029 11.2294 7.08154C11.2175 7.14398 11.1628 7.3761 11.089 7.47495C11.0374 7.54789 10.9763 7.59212 10.9089 7.59212C10.8888 7.59212 10.7694 7.59212 10.7676 7.41484C10.7666 7.32732 10.7845 7.23792 10.8063 7.14083ZM12.5473 7.93768L12.5688 7.91586C12.5992 7.75446 12.6042 7.71653 12.6717 7.38976C12.7054 7.23478 12.7752 6.89425 12.808 6.77299C12.8701 6.74417 12.9302 6.71592 12.9904 6.71592C13.1285 6.71592 13.1117 6.83718 13.1062 6.88549C13.1012 6.96672 13.0505 7.23152 12.9976 7.45897L12.9648 7.60578C12.9398 7.71431 12.9124 7.81958 12.8883 7.92718L12.8988 7.94865C13.181 7.9336 13.2635 7.9336 13.5051 7.93768L13.5342 7.91586C13.5766 7.66367 13.588 7.59621 13.6674 7.2293L13.7052 7.06055C13.7808 6.73051 13.8191 6.56328 13.7631 6.42697C13.7011 6.27421 13.5557 6.23733 13.4249 6.23733C13.3382 6.23733 13.1791 6.25822 13.0378 6.32801C12.9873 6.3545 12.9366 6.38496 12.8869 6.41553L12.9302 6.24783L12.907 6.21947C12.6056 6.28062 12.5368 6.28879 12.2587 6.32801L12.2373 6.34353C12.2036 6.61159 12.1762 6.81302 12.0563 7.34005C12.0107 7.53424 11.9633 7.7303 11.9159 7.92403L11.9286 7.94865C12.2144 7.9336 12.2998 7.9336 12.5473 7.93768ZM14.6206 7.9486C14.6383 7.862 14.7437 7.34874 14.7446 7.34874C14.7446 7.34874 14.8344 6.97215 14.8398 6.95849C14.8398 6.95849 14.8681 6.91928 14.8963 6.90376H14.9379C15.3299 6.90376 15.7725 6.90376 16.1195 6.64853C16.3556 6.47347 16.517 6.21498 16.589 5.90082C16.6077 5.82379 16.6214 5.73218 16.6214 5.64057C16.6214 5.52025 16.5973 5.40121 16.5275 5.3082C16.3506 5.06067 15.9982 5.05612 15.5915 5.05426C15.5902 5.05426 15.391 5.05612 15.391 5.05612C14.8704 5.06254 14.6616 5.06067 14.5759 5.05017C14.5686 5.0881 14.555 5.15555 14.555 5.15555C14.555 5.15555 14.3685 6.01985 14.3685 6.02125C14.3685 6.02125 13.9222 7.85885 13.9012 7.94544C14.3558 7.93996 14.5421 7.93996 14.6206 7.9486ZM14.9661 6.41326C14.9661 6.41326 15.1644 5.55071 15.1635 5.55398L15.1699 5.50975L15.1727 5.47602L15.2519 5.48419C15.2519 5.48419 15.6608 5.51931 15.6704 5.52025C15.8318 5.58268 15.8983 5.74362 15.8519 5.95368C15.8095 6.14566 15.685 6.30706 15.525 6.38501C15.3932 6.45107 15.2318 6.45655 15.0655 6.45655H14.9579L14.9661 6.41326ZM16.2006 7.1568C16.1482 7.38017 16.088 7.78816 16.4614 7.93358C16.5804 7.98422 16.6871 7.99928 16.7955 7.99379C16.91 7.98761 17.016 7.93019 17.1143 7.84757C17.1054 7.88153 17.0966 7.91549 17.0877 7.94956L17.1046 7.97139C17.3732 7.96007 17.4565 7.96007 17.7474 7.96228L17.7738 7.94221C17.8163 7.69247 17.8563 7.44996 17.9667 6.97218C18.0205 6.74333 18.0742 6.51669 18.1294 6.28877L18.1207 6.26368C17.8204 6.31935 17.7401 6.33125 17.4511 6.37221L17.4292 6.39007C17.4263 6.41329 17.4232 6.43558 17.4204 6.45787C17.3755 6.38528 17.3104 6.32331 17.2099 6.28469C17.0814 6.23415 16.7796 6.29927 16.5202 6.53548C16.3379 6.70411 16.2504 6.93519 16.2006 7.1568ZM16.8315 7.17046C16.8958 6.89516 16.9697 6.66222 17.1611 6.66222C17.2821 6.66222 17.3458 6.7739 17.3329 6.96436C17.3226 7.01186 17.3115 7.06192 17.2983 7.11852C17.2792 7.20033 17.2584 7.28144 17.2382 7.36267C17.2177 7.41822 17.1938 7.47062 17.1675 7.50551C17.1183 7.5753 17.0011 7.6186 16.9337 7.6186C16.9145 7.6186 16.7964 7.6186 16.7923 7.44448C16.7914 7.35777 16.8092 7.26849 16.8315 7.17046ZM20.1261 6.26145L20.1029 6.23496C19.8056 6.29518 19.7518 6.30475 19.4788 6.34162L19.4587 6.3617C19.4578 6.36496 19.4569 6.36998 19.4555 6.37453L19.4546 6.36998C19.2513 6.83901 19.2573 6.73783 19.0918 7.10708C19.0908 7.09027 19.0908 7.07977 19.0899 7.06191L19.0485 6.26145L19.0225 6.23496C18.7111 6.29518 18.7037 6.30475 18.4162 6.34162L18.3938 6.3617C18.3906 6.37127 18.3906 6.38177 18.3888 6.39321L18.3906 6.39729C18.4266 6.58098 18.4179 6.54002 18.454 6.82991C18.4708 6.97217 18.4932 7.11525 18.51 7.25576C18.5384 7.49091 18.5542 7.60668 18.5889 7.96554C18.3947 8.28601 18.3487 8.40726 18.1618 8.68851L18.1631 8.69131L18.0314 8.89951C18.0164 8.92145 18.0027 8.93651 17.9836 8.94292C17.9626 8.95331 17.9353 8.95518 17.8973 8.95518H17.8244L17.716 9.31579L18.0879 9.32221C18.3062 9.32127 18.4435 9.21916 18.5174 9.08192L18.7512 8.68116H18.7475L18.7721 8.65292C18.9294 8.31425 20.1261 6.26145 20.1261 6.26145ZM16.2006 10.9975H16.0428L16.6268 9.06599H16.8206L16.8821 8.86701L16.888 9.08828C16.8808 9.22505 16.9884 9.34631 17.271 9.32623H17.5979L17.7104 8.9543H17.5874C17.5167 8.9543 17.4839 8.93645 17.488 8.89817L17.482 8.67305H16.8767V8.67422C16.681 8.6783 16.0965 8.69301 15.9782 8.72452C15.835 8.76139 15.6841 8.86993 15.6841 8.86993L15.7434 8.67072H15.1771L15.0592 9.06599L14.4674 11.0271H14.3525L14.2399 11.3963H15.3677L15.3299 11.5194H15.8857L15.9225 11.3963H16.0784L16.2006 10.9975ZM15.7379 9.45846C15.6472 9.48355 15.4785 9.55964 15.4785 9.55964L15.6286 9.06599H16.0784L15.9699 9.42566C15.9699 9.42566 15.8309 9.43383 15.7379 9.45846ZM15.7465 10.1637C15.7465 10.1637 15.6052 10.1814 15.5122 10.2024C15.4206 10.2302 15.2488 10.3177 15.2488 10.3177L15.4038 9.80401H15.856L15.7465 10.1637ZM15.4945 11.0021H15.0432L15.174 10.5685H15.6239L15.4945 11.0021ZM16.5813 9.80401H17.2318L17.1383 10.1067H16.4792L16.3802 10.4377H16.9569L16.5202 11.0526C16.4897 11.0978 16.4622 11.1138 16.4318 11.1265C16.4012 11.142 16.3611 11.1602 16.3146 11.1602H16.1546L16.0447 11.5227H16.4632C16.6807 11.5227 16.8092 11.4237 16.9041 11.2938L17.2035 10.884L17.2678 11.3001C17.2815 11.3781 17.3375 11.4237 17.3754 11.4415C17.4173 11.4625 17.4606 11.4985 17.5218 11.5039C17.5874 11.5067 17.6347 11.5089 17.6663 11.5089H17.8719L17.9954 11.1033H17.9142C17.8677 11.1033 17.7875 11.0954 17.7739 11.0809C17.7602 11.0631 17.7602 11.0358 17.7528 10.9943L17.6876 10.5772H17.4205L17.5376 10.4377H18.1955L18.2967 10.1067H17.6876L17.7825 9.80401H18.3897L18.5023 9.43068H16.692L16.5813 9.80401ZM11.0871 11.0864L11.239 10.5813H11.863L11.977 10.2056H11.3524L11.4477 9.89473H12.0581L12.1712 9.53096H10.644L10.5333 9.89473H10.8802L10.7877 10.2056H10.4398L10.3245 10.5877H10.6713L10.4689 11.2559C10.4416 11.3444 10.4818 11.3781 10.5072 11.4192C10.5333 11.4592 10.5596 11.4857 10.6189 11.5008C10.6801 11.5144 10.722 11.5226 10.7789 11.5226H11.4824L11.6077 11.1064L11.2959 11.1493C11.2357 11.1493 11.0689 11.142 11.0871 11.0864ZM11.1587 8.66844L11.0006 8.95424C10.9667 9.01668 10.9363 9.05543 10.9088 9.07328C10.8847 9.08834 10.8368 9.09464 10.7675 9.09464H10.685L10.5747 9.46027H10.8487C10.9805 9.46027 11.0817 9.41195 11.13 9.38779C11.1819 9.36002 11.1956 9.37589 11.2357 9.33714L11.3283 9.25697H12.1839L12.2975 8.87629H11.6711L11.7805 8.66844H11.1587ZM12.4219 11.0937C12.4073 11.0727 12.4178 11.0357 12.4401 10.9587L12.674 10.1846H13.506C13.6272 10.1829 13.7148 10.1815 13.7717 10.1774C13.8329 10.1709 13.8994 10.1491 13.9719 10.1099C14.0467 10.0688 14.0849 10.0255 14.1173 9.97582C14.1533 9.92622 14.2112 9.81769 14.2609 9.65034L14.5549 8.67074L13.6915 8.67576C13.6915 8.67576 13.4257 8.71497 13.3086 8.75827C13.1905 8.80658 13.0218 8.94149 13.0218 8.94149L13.0997 8.67296H12.5664L11.8197 11.1493C11.7933 11.2454 11.7755 11.3152 11.7714 11.3571C11.77 11.4023 11.8284 11.447 11.8662 11.4807C11.9109 11.5144 11.9769 11.5089 12.0403 11.5144C12.107 11.5194 12.2017 11.5226 12.3325 11.5226H12.7424L12.8682 11.0978L12.5013 11.1325C12.4621 11.1325 12.4337 11.1115 12.4219 11.0937ZM12.8249 9.66178H13.6988L13.6432 9.8359C13.6354 9.83998 13.6167 9.82726 13.5278 9.83776H12.7711L12.8249 9.66178ZM13 9.0778H13.8812L13.8178 9.28751C13.8178 9.28751 13.4025 9.28343 13.3359 9.29568C13.0433 9.34633 12.8723 9.50271 12.8723 9.50271L13 9.0778ZM13.6628 10.419C13.6555 10.445 13.6441 10.4609 13.6281 10.4728C13.6104 10.4842 13.5817 10.4883 13.5388 10.4883H13.4143L13.4217 10.2762H12.9037L12.8827 11.3129C12.8819 11.3877 12.8892 11.431 12.9439 11.4657C12.9986 11.509 13.1673 11.5145 13.3943 11.5145H13.7188L13.836 11.1264L13.5534 11.1419L13.4595 11.1474C13.4466 11.142 13.4344 11.1369 13.4207 11.1233C13.4088 11.1115 13.3888 11.1187 13.392 11.0439L13.3943 10.7782L13.6906 10.7659C13.8506 10.7659 13.9189 10.7139 13.9773 10.6643C14.033 10.6168 14.0512 10.5622 14.0722 10.4883L14.1219 10.253H13.7147L13.6628 10.419Z" fill="#FEFEFE"/>
                </g>
                <defs>
                    <clipPath id="clip0_9_1648">
                        <rect width="24" height="16" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
            <svg
              version="1.1"
              className="chip_3"
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

            <p className="number_3">{card_number}</p>
            <p className="date_3">
              {expiry.month ? expiry.month : "XX"} /{" "}
              {expiry.year ? expiry.year.slice(-2) : "XX"}
            </p>
            <p className="name_3">{name ? name : "YOUR NAME"}</p>
          </div>
          <div className="flip-card-back_3">
            <div className="strip"></div>
            <div className="mstrip"></div>
            <div className="sstrip">
              <p className="code_3">{cvc ? cvc : "XXX"}</p>
            </div>
            <svg
              version="1.1"
              className="contactless_3"
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
  
export default UnionCard;
