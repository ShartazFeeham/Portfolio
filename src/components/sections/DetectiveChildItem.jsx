import PushPin from '../detective/PushPin';
import TapeStrip from '../detective/TapeStrip';

export default function DetectiveChildItem({ text, type = 'card', rotation = 0, pinColor }) {
  return (
    <div className={`detective-child detective-child--${type}`}
      style={{ '--child-rot': `${rotation}deg` }}>
      <PushPin color={pinColor || '#cc2222'} size={14}
        style={{ position: 'absolute', top: -4, left: '50%', transform: 'translateX(-50%)' }} />
      {type === 'card' && <TapeStrip width={35} rotation={rotation > 0 ? -20 : 20}
        style={{ position: 'absolute', top: -6, right: 2 }} />}
      <span className="child-text font-hand">{text}</span>
    </div>
  );
}
