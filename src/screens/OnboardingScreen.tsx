import { useState } from 'react';
import { IconEye, IconWait, IconCheck } from '../components/Icons';

const STEPS = [
  { num: 1, Icon: IconEye,   label: '바라보기' },
  { num: 2, Icon: IconWait,  label: '버튼 터치' },
  { num: 3, Icon: IconCheck, label: '선택 완료' },
];

interface OnboardingScreenProps {
  onStart: () => void;
}

export function OnboardingScreen({ onStart }: OnboardingScreenProps) {
  const [practiced, setPracticed] = useState(false);

  const handleStart = () => {
    localStorage.setItem('@italk_onboarded', 'true');
    onStart();
  };

  return (
    <div style={{
      minHeight: '100dvh',
      background: 'linear-gradient(160deg, #e8f4ff 0%, #f0f8ff 40%, #ffffff 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 24px 36px',
      gap: '24px',
      position: 'relative',
      overflow: 'hidden',
      boxSizing: 'border-box',
    }}>
      {/* 배경 장식 */}
      <div style={{
        position: 'absolute', top: -120, right: -100,
        width: 360, height: 360, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(31,111,178,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: -80, left: -80,
        width: 280, height: 280, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(58,159,214,0.10) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* 로고 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, zIndex: 1 }}>
        <div style={{
          width: 64, height: 64, borderRadius: 22,
          background: 'linear-gradient(135deg, #1F6FB2, #3a9fd6)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 10px 28px rgba(31,111,178,0.30)',
        }}>
          <IconEye size={32} color="#fff" />
        </div>
        <div style={{ fontSize: 34, fontWeight: 900, color: '#11233A', letterSpacing: '-1px', lineHeight: 1 }}>
          eye<em style={{ fontStyle: 'italic', color: '#1F6FB2' }}>talk</em>
        </div>
      </div>

      {/* 히어로 */}
      <div style={{ textAlign: 'center', zIndex: 1 }}>
        <h1 style={{
          fontSize: 36, fontWeight: 900,
          color: '#11233A',
          lineHeight: 1.28, margin: '0 0 12px 0', letterSpacing: '-0.5px',
        }}>
          눈으로 말하는<br />새로운 방법
        </h1>
        <p style={{
          fontSize: 18, color: '#44546B',
          lineHeight: 1.65, margin: 0,
        }}>
          버튼을 터치하거나 시선으로<br />원하는 말을 선택하세요.
        </p>
      </div>

      {/* Steps + 버튼 (동일 너비) */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 12, zIndex: 1 }}>

        {/* Steps 카드 */}
        <div style={{
          width: '100%',
          background: '#fff',
          border: '1.5px solid #DCE5EE',
          borderRadius: 22,
          padding: '22px 16px',
          display: 'flex',
          alignItems: 'flex-start',
          boxSizing: 'border-box',
          boxShadow: '0 4px 20px rgba(31,111,178,0.07)',
        }}>
          {STEPS.map((s, i) => (
            <div key={s.num} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, position: 'relative' }}>
              {i < STEPS.length - 1 && (
                <div style={{
                  position: 'absolute', top: 23, left: '60%', right: '-60%',
                  height: 1.5, background: '#DCE5EE', zIndex: 0,
                }} />
              )}
              <div style={{
                width: 48, height: 48, borderRadius: 16,
                background: 'linear-gradient(135deg, #E4EFF9, #cce3f5)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative', zIndex: 1,
                boxShadow: '0 3px 10px rgba(31,111,178,0.12)',
              }}>
                <s.Icon size={22} color="#1F6FB2" />
              </div>
              <div style={{ fontSize: 10, fontWeight: 700, color: '#93afc8', letterSpacing: 0.8, textTransform: 'uppercase' as const }}>
                STEP {s.num}
              </div>
              <div style={{ fontSize: 16, fontWeight: 800, color: '#11233A', textAlign: 'center', lineHeight: 1.2 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* 연습 버튼 */}
        <button
          onClick={() => setPracticed(true)}
          style={{
            width: '100%',
            padding: '22px 20px',
            borderRadius: 20,
            border: practiced
              ? '2px solid #A8D9C3'
              : '2px dashed #93afc8',
            background: practiced ? '#f0fbf6' : '#EAF3FB',
            cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
            fontSize: 20, fontWeight: 700,
            color: practiced ? '#1E8E6E' : '#1F6FB2',
            transition: 'all 0.3s ease',
            boxSizing: 'border-box',
          }}
        >
          {practiced ? (
            <>
              <IconCheck size={26} color="#1E8E6E" strokeWidth={2.6} />
              <span>잘하셨어요!</span>
            </>
          ) : (
            <>
              <IconEye size={26} color="#1F6FB2" />
              <span>여기를 한 번 터치해보세요</span>
            </>
          )}
        </button>

        {/* 시작 버튼 */}
        <button
          onClick={handleStart}
          style={{
            width: '100%',
            padding: '22px 20px',
            borderRadius: 20,
            border: 'none',
            background: 'linear-gradient(135deg, #1F6FB2, #3a9fd6)',
            cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
            fontSize: 21, fontWeight: 900,
            color: '#fff',
            boxShadow: '0 10px 28px rgba(31,111,178,0.30)',
            transition: 'opacity 0.15s, transform 0.1s',
            boxSizing: 'border-box',
          }}
          onPointerDown={e => (e.currentTarget.style.transform = 'scale(0.97)')}
          onPointerUp={e => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <IconCheck size={24} color="#fff" strokeWidth={2.8} />
          <span>시작하기</span>
        </button>
      </div>
    </div>
  );
}
