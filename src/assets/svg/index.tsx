type IconType = {
  scale?: number;
};

export const HalfStarIcon = ({ scale }: IconType) => (
  <svg
    width={scale ? scale * 14 : 14}
    height={scale ? scale * 13 : 13}
    viewBox='0 0 14 13'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M6.69389 1.69132C6.79637 1.37592 7.24258 1.37592 7.34506 1.69133L8.246 4.46414C8.42571 5.01722 8.94111 5.39168 9.52264 5.39168H12.4382C12.7698 5.39168 12.9077 5.81605 12.6394 6.01098L10.2807 7.72467C9.81021 8.06649 9.61334 8.67238 9.79305 9.22546L10.694 11.9983C10.7965 12.3137 10.4355 12.576 10.1672 12.381L7.80848 10.6673C7.33801 10.3255 6.70094 10.3255 6.23046 10.6673L3.87177 12.381C3.60347 12.5759 3.24248 12.3137 3.34496 11.9983L4.2459 9.22546C4.42561 8.67238 4.22874 8.06649 3.75827 7.72467L1.39957 6.01098C1.13127 5.81605 1.26916 5.39168 1.60079 5.39168H4.5163C5.09784 5.39168 5.61324 5.01722 5.79294 4.46414L6.69389 1.69132Z'
      stroke='#FFC107'
    />
  </svg>
);

HalfStarIcon.defaultProps = {
  scale: 1,
};

export const FullStarIcon = ({ scale }: IconType) => (
  <svg
    width={scale ? scale * 13 : 13}
    height={scale ? scale * 13 : 13}
    viewBox='0 0 13 13'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M5.84019 1.53682C6.09234 0.760758 7.19026 0.760759 7.44241 1.53682L8.34336 4.30963C8.45612 4.6567 8.77955 4.89168 9.14447 4.89168H12.06C12.876 4.89168 13.2153 5.93586 12.5551 6.41549L10.1964 8.12918C9.90117 8.34368 9.77763 8.72388 9.8904 9.07095L10.7913 11.8438C11.0435 12.6198 10.1553 13.2652 9.49511 12.7855L7.13642 11.0718C6.84119 10.8573 6.44141 10.8573 6.14618 11.0718L3.78749 12.7855C3.12733 13.2652 2.2391 12.6198 2.49126 11.8438L3.3922 9.07095C3.50497 8.72388 3.38143 8.34368 3.0862 8.12918L0.727502 6.41548C0.0673478 5.93585 0.406622 4.89168 1.22262 4.89168H4.13813C4.50305 4.89168 4.82648 4.6567 4.93924 4.30963L5.84019 1.53682Z'
      fill='#FFC107'
    />
  </svg>
);

FullStarIcon.defaultProps = {
  scale: 1,
};

export const CarIcon = ({ scale }: IconType) => (
  <svg
    width={scale ? scale * 43 : 43}
    height={scale ? scale * 49 : 49}
    viewBox='0 0 43 39'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M25.8664 4.82096H30.0781L38.5015 19.5619H40.6074C41.1659 19.5619 41.7015 19.7838 42.0965 20.1787C42.4914 20.5736 42.7133 21.1093 42.7133 21.6678C42.7133 22.2263 42.4914 22.7619 42.0965 23.1568C41.7015 23.5518 41.1659 23.7736 40.6074 23.7736H38.5015V36.4088C38.5015 36.9673 38.2797 37.5029 37.8848 37.8978C37.4898 38.2927 36.9542 38.5146 36.3957 38.5146H34.2898C33.7313 38.5146 33.1957 38.2927 32.8008 37.8978C32.4059 37.5029 32.184 36.9673 32.184 36.4088V34.3029H11.1255V36.4088C11.1255 36.9673 10.9036 37.5029 10.5087 37.8978C10.1137 38.2927 9.57811 38.5146 9.0196 38.5146H6.91375C6.35524 38.5146 5.81961 38.2927 5.42469 37.8978C5.02976 37.5029 4.8079 36.9673 4.8079 36.4088V23.7736H2.70204C2.14354 23.7736 1.60791 23.5518 1.21298 23.1568C0.818057 22.7619 0.596191 22.2263 0.596191 21.6678C0.596191 21.1093 0.818057 20.5736 1.21298 20.1787C1.60791 19.7838 2.14354 19.5619 2.70204 19.5619H4.8079L13.2313 4.82096H17.443V0.609253H25.8664V4.82096ZM33.995 19.5619L27.9723 9.03267H15.3372L9.31442 19.5619H33.995ZM12.1784 30.0912C13.0161 30.0912 13.8196 29.7584 14.412 29.166C15.0044 28.5736 15.3372 27.7702 15.3372 26.9324C15.3372 26.0947 15.0044 25.2912 14.412 24.6988C13.8196 24.1064 13.0161 23.7736 12.1784 23.7736C11.3406 23.7736 10.5372 24.1064 9.94479 24.6988C9.3524 25.2912 9.0196 26.0947 9.0196 26.9324C9.0196 27.7702 9.3524 28.5736 9.94479 29.166C10.5372 29.7584 11.3406 30.0912 12.1784 30.0912ZM31.1311 30.0912C31.9688 30.0912 32.7723 29.7584 33.3647 29.166C33.957 28.5736 34.2898 27.7702 34.2898 26.9324C34.2898 26.0947 33.957 25.2912 33.3647 24.6988C32.7723 24.1064 31.9688 23.7736 31.1311 23.7736C30.2933 23.7736 29.4899 24.1064 28.8975 24.6988C28.3051 25.2912 27.9723 26.0947 27.9723 26.9324C27.9723 27.7702 28.3051 28.5736 28.8975 29.166C29.4899 29.7584 30.2933 30.0912 31.1311 30.0912Z'
      fill='#352F2B'
    />
  </svg>
);

CarIcon.defaultProps = {
  scale: 1,
};

export const UserIcon = ({ scale }: IconType) => (
  <svg
    width={scale ? scale * 43 : 43}
    height={scale ? scale * 38 : 38}
    viewBox='0 0 43 38'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <g clipPath='url(#clip0_3_5907)'>
      <path
        d='M28.8535 27.9227V26.0116C31.432 24.5731 33.5331 20.9896 33.5331 17.4037C33.5331 11.6474 33.5331 6.97974 26.5136 6.97974C19.4941 6.97974 19.4941 11.6474 19.4941 17.4037C19.4941 20.9896 21.5953 24.5731 24.1738 26.0116V27.9227C16.2371 28.5643 10.1348 32.4258 10.1348 37.0934H42.8925C42.8925 32.4258 36.7902 28.5643 28.8535 27.9227Z'
        fill='#352F2B'
      />
      <path
        d='M12.7366 28.8168C14.7583 27.508 17.2736 26.5142 20.0416 25.9073C19.478 25.2455 18.9819 24.5301 18.5605 23.7716C17.4628 21.8248 16.8786 19.6355 16.8618 17.406C16.8618 14.2927 16.8618 11.3508 17.9802 8.94405C19.0659 6.60908 21.0197 5.16131 23.8017 4.61926C23.184 1.85112 21.5368 0.0327148 17.1542 0.0327148C10.1347 0.0327148 10.1347 4.70034 10.1347 10.4567C10.1347 14.0425 12.2359 17.6261 14.8144 19.0646V20.9756C6.87768 21.6173 0.775391 25.4788 0.775391 30.1464H10.9747C11.5059 29.6785 12.0932 29.2361 12.7366 28.8191V28.8168Z'
        fill='#352F2B'
      />
    </g>
    <defs>
      <clipPath id='clip0_3_5907'>
        <rect
          width='42.1171'
          height='37.063'
          fill='white'
          transform='translate(0.775391 0.0303955)'
        />
      </clipPath>
    </defs>
  </svg>
);

UserIcon.defaultProps = {
  scale: 1,
};

export const FBIcon = ({ scale }: IconType) => (
  <svg
    width={scale ? scale * 10 : 10}
    height={scale ? scale * 18 : 18}
    viewBox='0 0 10 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M6.065 17.9972V9.80117H8.83L9.241 6.59217H6.065V4.54817C6.065 3.62217 6.323 2.98817 7.652 2.98817H9.336V0.127169C8.51664 0.0393602 7.69305 -0.00303802 6.869 0.000169166C4.425 0.000169166 2.747 1.49217 2.747 4.23117V6.58617H0V9.79517H2.753V17.9972H6.065Z'
      fill='#1D1B19'
    />
  </svg>
);

FBIcon.defaultProps = {
  scale: 1,
};

export const TwitterIcon = ({ scale }: IconType) => (
  <svg
    width={scale ? scale * 25 : 25}
    height={scale ? scale * 20 : 20}
    viewBox='0 0 25 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M24.668 2.37575C23.7854 2.76628 22.8249 3.04735 21.8356 3.15682C22.8627 2.53089 23.6319 1.54202 23.9988 0.375752C23.035 0.963885 21.9791 1.37629 20.878 1.59469C20.4178 1.09003 19.8613 0.687999 19.243 0.413643C18.6247 0.139287 17.9579 -0.00151415 17.2842 1.22793e-05C14.5586 1.22793e-05 12.3666 2.26628 12.3666 5.04735C12.3666 5.43788 12.4127 5.82841 12.4877 6.20415C8.40646 5.98522 4.76651 3.98522 2.34661 0.923089C1.90568 1.69562 1.67462 2.57524 1.67746 3.47042C1.67746 5.2219 2.54563 6.76628 3.86951 7.67456C3.08932 7.64305 2.32741 7.42308 1.64574 7.03255V7.09468C1.64574 9.54734 3.33592 11.5799 5.58853 12.0473C5.16558 12.16 4.73048 12.2177 4.29349 12.2189C3.97334 12.2189 3.67049 12.1864 3.36476 12.142C3.98776 14.142 5.80197 15.5947 7.96228 15.642C6.2721 17 4.15505 17.7988 1.85629 17.7988C1.44384 17.7988 1.06311 17.784 0.667969 17.7367C2.84848 19.1716 5.43566 20 8.22187 20C17.2669 20 22.2163 12.3136 22.2163 5.64202C22.2163 5.42309 22.2163 5.20415 22.2019 4.98522C23.1595 4.26628 23.9988 3.37575 24.668 2.37575Z'
      fill='#1D1B19'
    />
  </svg>
);

TwitterIcon.defaultProps = {
  scale: 1,
};

export const GoogleIcon = ({ scale }: IconType) => (
  <svg
    width={scale ? scale * 19 : 19}
    height={scale ? scale * 18 : 18}
    viewBox='0 0 19 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M9.60609 7.302V10.753H14.3981C13.9521 12.946 12.0851 14.206 9.60609 14.206C8.21847 14.1869 6.89414 13.6223 5.91963 12.6342C4.94511 11.6462 4.39875 10.3143 4.39875 8.9265C4.39875 7.53874 4.94511 6.20677 5.91963 5.21875C6.89414 4.23073 8.21847 3.66609 9.60609 3.647C10.8063 3.64556 11.9696 4.06207 12.8961 4.825L15.4961 2.225C14.4113 1.27077 13.1112 0.593977 11.7074 0.252709C10.3035 -0.0885598 8.8378 -0.084118 7.43603 0.265653C6.03426 0.615424 4.73829 1.30008 3.65932 2.26087C2.58035 3.22166 1.7506 4.42989 1.24128 5.78188C0.731962 7.13387 0.558276 8.58925 0.735129 10.0231C0.911982 11.457 1.43409 12.8266 2.25666 14.0143C3.07922 15.202 4.17768 16.1724 5.45777 16.8422C6.73785 17.5121 8.16135 17.8613 9.60609 17.86C14.0731 17.86 18.1351 14.611 18.1351 8.926C18.1282 8.37864 18.0611 7.8337 17.9351 7.301L9.60609 7.302Z'
      fill='#1D1B19'
    />
  </svg>
);

GoogleIcon.defaultProps = {
  scale: 1,
};

export const ArrowRight = ({ scale }: IconType) => (
  <svg
    width={scale ? scale * 13 : 13}
    height={scale ? scale * 22 : 22}
    viewBox='0 0 13 22'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M2.65333 0.437513L12.5448 9.94375C13.1517 10.5271 13.1517 11.4729 12.5448 12.0562L2.65333 21.5625C2.04635 22.1458 1.06223 22.1458 0.45524 21.5625C-0.151747 20.9791 -0.151747 20.0333 0.45524 19.45L9.24762 11L0.45524 2.55001C-0.151747 1.96666 -0.151747 1.02086 0.45524 0.437513C1.06223 -0.145838 2.04635 -0.145838 2.65333 0.437513Z'
      fill='white'
    />
  </svg>
);

ArrowRight.defaultProps = {
  scale: 1,
};

export const MoneyIcon = ({ scale }: IconType) => (
  <svg
    width={scale ? 44 * scale : 44}
    height={scale ? 35 * scale : 35}
    viewBox='0 0 44 35'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M41.0078 0.715088H3.10244C2.54393 0.715088 2.0083 0.936954 1.61337 1.33188C1.21845 1.7268 0.996582 2.26243 0.996582 2.82094V32.3029C0.996582 32.8614 1.21845 33.397 1.61337 33.792C2.0083 34.1869 2.54393 34.4087 3.10244 34.4087H41.0078C41.5663 34.4087 42.1019 34.1869 42.4969 33.792C42.8918 33.397 43.1136 32.8614 43.1136 32.3029V2.82094C43.1136 2.26243 42.8918 1.7268 42.4969 1.33188C42.1019 0.936954 41.5663 0.715088 41.0078 0.715088ZM38.9019 23.8795C37.2264 23.8795 35.6195 24.5451 34.4347 25.7298C33.25 26.9146 32.5844 28.5215 32.5844 30.197H11.5258C11.5258 28.5215 10.8602 26.9146 9.67548 25.7298C8.49071 24.5451 6.88381 23.8795 5.20829 23.8795V11.2444C6.88381 11.2444 8.49071 10.5788 9.67548 9.39398C10.8602 8.20921 11.5258 6.60231 11.5258 4.92679H32.5844C32.5844 6.60231 33.25 8.20921 34.4347 9.39398C35.6195 10.5788 37.2264 11.2444 38.9019 11.2444V23.8795Z'
      fill='#352F2B'
    />
    <path
      d='M22.0554 9.13831C17.4099 9.13831 13.632 12.9162 13.632 17.5617C13.632 22.2072 17.4099 25.9851 22.0554 25.9851C26.7009 25.9851 30.4788 22.2072 30.4788 17.5617C30.4788 12.9162 26.7009 9.13831 22.0554 9.13831ZM22.0554 21.7734C19.7326 21.7734 17.8437 19.8845 17.8437 17.5617C17.8437 15.239 19.7326 13.35 22.0554 13.35C24.3781 13.35 26.2671 15.239 26.2671 17.5617C26.2671 19.8845 24.3781 21.7734 22.0554 21.7734Z'
      fill='#352F2B'
    />
  </svg>
);

MoneyIcon.defaultProps = {
  scale: 1,
};

export const WebIcon = ({ scale }: IconType) => (
  <svg
    width={scale ? scale * 43 : 43}
    height={scale ? scale * 43 : 43}
    viewBox='0 0 43 43'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M21.4335 0.503418C17.2686 0.503418 13.1971 1.73848 9.73404 4.05242C6.27099 6.36636 3.57186 9.65525 1.97799 13.5032C0.384124 17.3511 -0.0329047 21.5853 0.779643 25.6703C1.59219 29.7552 3.59782 33.5075 6.54291 36.4526C9.488 39.3977 13.2403 41.4033 17.3252 42.2158C21.4102 43.0284 25.6443 42.6114 29.4923 41.0175C33.3402 39.4236 36.6291 36.7245 38.9431 33.2614C41.257 29.7984 42.4921 25.7269 42.4921 21.5619C42.4857 15.9788 40.265 10.6262 36.3171 6.67835C32.3693 2.73049 27.0166 0.509788 21.4335 0.503418ZM4.4363 27.5787H6.39173L12.6747 31.4895C13.0064 31.6959 13.4053 31.7651 13.7871 31.6825C14.1688 31.6 14.5036 31.3722 14.7204 31.0473L16.2366 28.773C16.4292 28.4838 16.5156 28.1368 16.4814 27.791C16.4471 27.4452 16.2942 27.122 16.0486 26.8762L12.4085 23.2346L13.9126 18.5536H21.9194C22.2198 18.5535 22.5133 18.4635 22.7621 18.2951C23.0108 18.1268 23.2035 17.8878 23.3153 17.609L25.6949 11.6599C25.7739 11.4626 25.8101 11.2508 25.8013 11.0385C25.7925 10.8261 25.7388 10.6181 25.6437 10.428L22.2052 3.55089C25.3063 3.6749 28.3226 4.59874 30.9612 6.23268C33.5999 7.86662 35.7711 10.1551 37.2642 12.876C38.7572 15.5968 39.5212 18.6575 39.4821 21.7609C39.443 24.8642 38.602 27.9047 37.0409 30.587H31.9628C31.5639 30.587 31.1813 30.7455 30.8992 31.0276C30.6171 31.3097 30.4586 31.6923 30.4586 32.0912V37.1708C28.1686 38.5039 25.6123 39.3145 22.9726 39.5447C20.3328 39.775 17.6748 39.4192 15.1886 38.5027C12.7024 37.5862 10.4493 36.1318 8.59058 34.2434C6.73182 32.3549 5.31325 30.0791 4.4363 27.5787Z'
      fill='#1F1A17'
    />
  </svg>
);

WebIcon.defaultProps = {
  scale: 1,
};

export const PlayIcon = ({ scale }: IconType) => (
  <svg
    width={scale ? 12 * scale : 12}
    height={scale ? 13 * scale : 13}
    viewBox='0 0 12 13'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M0.212175 1.96008C0.211446 0.663213 1.61489 -0.148122 2.73838 0.499682L10.3219 4.87235C11.4454 5.52016 11.4463 7.14124 10.3235 7.79031L2.74494 12.1715C1.62218 12.8206 0.217822 12.0108 0.217093 10.7139L0.212175 1.96008Z'
      fill='white'
    />
  </svg>
);

PlayIcon.defaultProps = {
  scale: 1,
};

export const LocationIcon = ({ scale }: IconType) => (
  <svg
    width={scale ? 11 * scale : 11}
    height={scale ? 13 * scale : 13}
    viewBox='0 0 11 13'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M5.18848 0C2.43163 0 0.188527 2.33285 0.188527 5.19675C0.170403 9.386 4.99848 12.8596 5.18848 13C5.18848 13 10.2066 9.386 10.1884 5.2C10.1884 2.33285 7.94532 0 5.18848 0ZM5.18848 7.8C3.80724 7.8 2.6885 6.6365 2.6885 5.2C2.6885 3.7635 3.80724 2.6 5.18848 2.6C6.56971 2.6 7.68845 3.7635 7.68845 5.2C7.68845 6.6365 6.56971 7.8 5.18848 7.8Z'
      fill='#C6C6C6'
    />
  </svg>
);

LocationIcon.defaultProps = {
  scale: 1,
};

export const InstagramIcon = ({ scale }: IconType) => (
  <svg
    width={scale ? 19 * scale : 19}
    height={scale ? 19 * scale : 19}
    viewBox='0 0 19 19'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M18.618 5.324C18.6079 4.56662 18.4661 3.81678 18.199 3.108C17.9673 2.51015 17.6135 1.9672 17.1601 1.51383C16.7068 1.06046 16.1638 0.706651 15.566 0.475C14.8663 0.212357 14.1271 0.0703413 13.38 0.0550001C12.418 0.0120001 12.113 0 9.67097 0C7.22897 0 6.91597 6.70552e-08 5.96097 0.0550001C5.21413 0.0704541 4.47532 0.212468 3.77597 0.475C3.17803 0.706489 2.63499 1.06024 2.1816 1.51363C1.72821 1.96702 1.37446 2.51006 1.14297 3.108C0.8798 3.80713 0.738092 4.54611 0.723969 5.293C0.680969 6.256 0.667969 6.561 0.667969 9.003C0.667969 11.445 0.667969 11.757 0.723969 12.713C0.738969 13.461 0.879969 14.199 1.14297 14.9C1.37485 15.4978 1.72886 16.0406 2.1824 16.4938C2.63594 16.947 3.17903 17.3006 3.77697 17.532C4.4744 17.8052 5.21334 17.9574 5.96197 17.982C6.92497 18.025 7.22997 18.038 9.67197 18.038C12.114 18.038 12.427 18.038 13.382 17.982C14.1291 17.9673 14.8683 17.8256 15.568 17.563C16.1657 17.3311 16.7085 16.9772 17.1618 16.5238C17.6151 16.0705 17.9691 15.5277 18.201 14.93C18.464 14.23 18.605 13.492 18.62 12.743C18.663 11.781 18.676 11.476 18.676 9.033C18.674 6.591 18.674 6.281 18.618 5.324ZM9.66497 13.621C7.11097 13.621 5.04197 11.552 5.04197 8.998C5.04197 6.444 7.11097 4.375 9.66497 4.375C10.8911 4.375 12.0669 4.86207 12.9339 5.72905C13.8009 6.59603 14.288 7.7719 14.288 8.998C14.288 10.2241 13.8009 11.4 12.9339 12.267C12.0669 13.1339 10.8911 13.621 9.66497 13.621ZM14.472 5.282C14.3304 5.28213 14.1901 5.25434 14.0593 5.20021C13.9284 5.14608 13.8095 5.06668 13.7094 4.96655C13.6093 4.86643 13.5299 4.74754 13.4758 4.61669C13.4216 4.48584 13.3938 4.3456 13.394 4.204C13.394 4.0625 13.4218 3.92239 13.476 3.79166C13.5301 3.66093 13.6095 3.54215 13.7096 3.44209C13.8096 3.34204 13.9284 3.26267 14.0591 3.20852C14.1899 3.15437 14.33 3.1265 14.4715 3.1265C14.613 3.1265 14.7531 3.15437 14.8838 3.20852C15.0145 3.26267 15.1333 3.34204 15.2334 3.44209C15.3334 3.54215 15.4128 3.66093 15.4669 3.79166C15.5211 3.92239 15.549 4.0625 15.549 4.204C15.549 4.8 15.067 5.282 14.472 5.282Z'
      fill='#1D1B19'
    />
    <path
      d='M9.66511 12.0011C11.3236 12.0011 12.6681 10.6566 12.6681 8.99812C12.6681 7.33961 11.3236 5.99512 9.66511 5.99512C8.0066 5.99512 6.66211 7.33961 6.66211 8.99812C6.66211 10.6566 8.0066 12.0011 9.66511 12.0011Z'
      fill='#1D1B19'
    />
  </svg>
);

InstagramIcon.defaultProps = {
  scale: 1,
};

export const PhoneIcon = ({ scale }: IconType) => (
  <svg
    width={scale ? 10 * scale : 10}
    height={scale ? 12 * scale : 12}
    viewBox='0 0 10 12'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M2.64464 0.0609613C2.97638 -0.0335014 3.33236 -0.017808 3.65334 0.105429C3.97431 0.228666 4.24091 0.452013 4.40876 0.738288L4.46562 0.84497L4.96673 1.89819C5.11904 2.21787 5.16848 2.57278 5.1089 2.91879C5.04932 3.2648 4.88336 3.58663 4.63164 3.84425L4.53157 3.93876L3.74011 4.63542C3.59759 4.76287 3.70448 5.25619 4.22075 6.09962C4.68395 6.85857 5.06225 7.21299 5.24723 7.23232H5.27983L5.32 7.22516L6.87412 6.77623C7.08299 6.71573 7.30589 6.71334 7.51616 6.76934C7.72643 6.82533 7.91517 6.93735 8.0598 7.09198L8.12955 7.17432L9.15754 8.52038C9.35926 8.78414 9.45986 9.10491 9.44277 9.42988C9.42569 9.75485 9.29193 10.0646 9.06354 10.3082L8.97105 10.3984L8.5594 10.7664C8.19042 11.0965 7.72887 11.3195 7.2296 11.4089C6.73034 11.4984 6.21436 11.4506 5.74303 11.2712C4.27609 10.7127 2.94334 9.43685 1.73264 7.45642C0.51967 5.47098 0.0155293 3.74043 0.240687 2.25833C0.308887 1.81024 0.504339 1.38795 0.806278 1.03635C1.10822 0.684749 1.50536 0.416961 1.95553 0.261439L2.10184 0.215615L2.64464 0.0609613Z'
      fill='#C6C6C6'
    />
  </svg>
);

PhoneIcon.defaultProps = {
  scale: 1,
};

export const MailIcon = ({ scale }: IconType) => (
  <svg
    width={scale ? 11 * scale : 11}
    height={scale ? 8 * scale : 8}
    viewBox='0 0 11 8'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M9.97686 0.00339211C9.93297 -0.0011307 9.88872 -0.0011307 9.84483 0.00339211H0.828383C0.770596 0.00428253 0.713191 0.0129474 0.657715 0.0291534L5.31085 4.66296L9.97686 0.00339211Z'
      fill='#C6C6C6'
    />
    <path
      d='M10.4543 0.451416L5.76579 5.12065C5.64513 5.2406 5.48189 5.30793 5.31175 5.30793C5.14161 5.30793 4.97838 5.2406 4.85771 5.12065L0.211018 0.486838C0.196733 0.539339 0.189159 0.59344 0.188477 0.647846V7.08817C0.188477 7.25897 0.25633 7.42279 0.377109 7.54356C0.497889 7.66434 0.661701 7.7322 0.832509 7.7322H9.84896C10.0198 7.7322 10.1836 7.66434 10.3044 7.54356C10.4251 7.42279 10.493 7.25897 10.493 7.08817V0.647846C10.4904 0.580755 10.4774 0.514478 10.4543 0.451416ZM1.27367 7.08817H0.826068V6.62768L3.16712 4.30595L3.62117 4.75999L1.27367 7.08817ZM9.84252 7.08817H9.39169L7.0442 4.75999L7.49824 4.30595L9.8393 6.62768L9.84252 7.08817Z'
      fill='#C6C6C6'
    />
  </svg>
);

MailIcon.defaultProps = {
  scale: 1,
};