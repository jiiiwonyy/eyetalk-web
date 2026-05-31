import armImg from '../assets/images/arm.svg';
import backImg from '../assets/images/back.svg';
import bedImg from '../assets/images/bed.svg';
import bellImg from '../assets/images/bell.svg';
import blanketImg from '../assets/images/blanket.svg';
import boredImg from '../assets/images/bored.svg';
import byeImg from '../assets/images/bye.svg';
import callImg from '../assets/images/call.svg';
import checkImg from '../assets/images/check.svg';
import clockImg from '../assets/images/clock.svg';
import curtenImg from '../assets/images/curten.svg';
import extremeImg from '../assets/images/extreme.svg';
import familyImg from '../assets/images/family.svg';
import headImg from '../assets/images/head.svg';
import heartImg from '../assets/images/heart.svg';
import helloImg from '../assets/images/hello.svg';
import image11Img from '../assets/images/image 11.svg';
import legImg from '../assets/images/leg.svg';
import lonelyImg from '../assets/images/lonely.svg';
import medicineImg from '../assets/images/medicine.svg';
import micImg from '../assets/images/mic.svg';
import mildImg from '../assets/images/mild.svg';
import moderateImg from '../assets/images/moderate.svg';
import reImg from '../assets/images/re.svg';
import scaredImg from '../assets/images/scared.svg';
import severeImg from '../assets/images/severe.svg';
import shoulderImg from '../assets/images/shoulder.svg';
import sorryImg from '../assets/images/sorry.svg';
import stomachImg from '../assets/images/stomach.svg';
import temperatureImg from '../assets/images/temperature.svg';
import thankyouImg from '../assets/images/thankyou.svg';
import tiredImg from '../assets/images/tired.svg';
import toiletImg from '../assets/images/toilet.svg';
import tvImg from '../assets/images/tv.svg';
import waterImg from '../assets/images/water.svg';

const IMAGE_MAP: Record<string, string> = {
  // 신체 부위
  arm: armImg,
  back: backImg,
  head: headImg,
  leg: legImg,
  shoulder: shoulderImg,
  stomach: stomachImg,

  // 통증 단계
  pain_0: checkImg,
  pain_3: mildImg,
  pain_5: moderateImg,
  pain_7: severeImg,
  pain_10: extremeImg,

  // 환경
  bed: bedImg,
  curtain: curtenImg,
  thermo: temperatureImg,
  tv: tvImg,

  // 인사/감사
  bye: byeImg,
  hello: helloImg,
  sorry: sorryImg,
  thanks: thankyouImg,
  wave: helloImg,

  // 감정
  good: heartImg,
  heart: heartImg,
  bad: tiredImg,
  scared: scaredImg,
  lonely: lonelyImg,
  bored: boredImg,

  // 행동/요청
  bell: bellImg,
  check: checkImg,
  yes: checkImg,
  no: reImg,
  voice: micImg,
  talk: micImg,

  // 카테고리 아이콘
  pain: extremeImg,
  wait: clockImg,

  // 요청 항목
  lung: micImg,
  home: bedImg,
  hand: image11Img,
  water: waterImg,
  blanket: blanketImg,
  toilet: toiletImg,
  phone: callImg,
  family: familyImg,
  medicine: medicineImg,
};

export function ItemIcon({ icon, size = 26 }: { icon: string; size?: number; color?: string }) {
  const src = IMAGE_MAP[icon] ?? heartImg;
  return (
    <img
      src={src}
      alt={icon}
      width={size}
      height={size}
      style={{ objectFit: 'contain', display: 'block' }}
    />
  );
}
