import ArmIcon from '../assets/images/arm.svg?react';
import BackIcon from '../assets/images/back.svg?react';
import BedIcon from '../assets/images/bed.svg?react';
import BellIcon from '../assets/images/bell.svg?react';
import BlanketIcon from '../assets/images/blanket.svg?react';
import BoredIcon from '../assets/images/bored.svg?react';
import ByeIcon from '../assets/images/bye.svg?react';
import CallIcon from '../assets/images/call.svg?react';
import CheckIcon from '../assets/images/check.svg?react';
import ClockIcon from '../assets/images/clock.svg?react';
import CurtenIcon from '../assets/images/curten.svg?react';
import ExtremeIcon from '../assets/images/extreme.svg?react';
import FamilyIcon from '../assets/images/family.svg?react';
import HeadIcon from '../assets/images/head.svg?react';
import HeartIcon from '../assets/images/heart.svg?react';
import HelloIcon from '../assets/images/hello.svg?react';
import LegIcon from '../assets/images/leg.svg?react';
import LonelyIcon from '../assets/images/lonely.svg?react';
import MedicineIcon from '../assets/images/medicine.svg?react';
import MicIcon from '../assets/images/mic.svg?react';
import NopainIcon from '../assets/images/nopain.svg?react';
import MildIcon from '../assets/images/mild.svg?react';
import ModerateIcon from '../assets/images/moderate.svg?react';
import ReIcon from '../assets/images/re.svg?react';
import ScaredIcon from '../assets/images/scared.svg?react';
import SevereIcon from '../assets/images/severe.svg?react';
import ShoulderIcon from '../assets/images/shoulder.svg?react';
import SorryIcon from '../assets/images/sorry.svg?react';
import StomachIcon from '../assets/images/stomach.svg?react';
import TemperatureIcon from '../assets/images/temperature.svg?react';
import ThankyouIcon from '../assets/images/thankyou.svg?react';
import TiredIcon from '../assets/images/tired.svg?react';
import ToiletIcon from '../assets/images/toilet.svg?react';
import TvIcon from '../assets/images/tv.svg?react';
import WaterIcon from '../assets/images/water.svg?react';

import type { SVGProps, ComponentType } from 'react';

type SvgComp = ComponentType<SVGProps<SVGSVGElement>>;

const IMAGE_MAP: Record<string, SvgComp> = {
  // 신체 부위
  arm: ArmIcon,
  back: BackIcon,
  head: HeadIcon,
  leg: LegIcon,
  shoulder: ShoulderIcon,
  stomach: StomachIcon,

  // 통증 단계
  pain_0: NopainIcon,
  pain_3: MildIcon,
  pain_5: ModerateIcon,
  pain_7: SevereIcon,
  pain_10: ExtremeIcon,

  // 환경
  bed: BedIcon,
  curtain: CurtenIcon,
  thermo: TemperatureIcon,
  tv: TvIcon,

  // 인사/감사
  bye: ByeIcon,
  hello: HelloIcon,
  sorry: SorryIcon,
  thanks: ThankyouIcon,
  wave: HelloIcon,

  // 감정
  good: HeartIcon,
  heart: HeartIcon,
  bad: TiredIcon,
  scared: ScaredIcon,
  lonely: LonelyIcon,
  bored: BoredIcon,

  // 행동/요청
  bell: BellIcon,
  check: CheckIcon,
  yes: CheckIcon,
  no: ReIcon,
  voice: MicIcon,
  talk: MicIcon,

  // 카테고리 아이콘
  pain: ExtremeIcon,
  wait: ClockIcon,

  // 요청 항목
  lung: MicIcon,
  home: BedIcon,
  hand: BellIcon,
  water: WaterIcon,
  blanket: BlanketIcon,
  toilet: ToiletIcon,
  phone: CallIcon,
  family: FamilyIcon,
  medicine: MedicineIcon,
};

export function ItemIcon({ icon, size = 26 }: { icon: string; size?: number; color?: string }) {
  const Icon = IMAGE_MAP[icon] ?? HeartIcon;
  return <Icon width={size} height={size} style={{ display: 'block', flexShrink: 0 }} />;
}
