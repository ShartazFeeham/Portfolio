import PushPin from '../detective/PushPin';
import TapeStrip from '../detective/TapeStrip';

export default function DetectiveNode({ id, icon: Icon, label, style, rotation, children, pinColor }) {
  return (
    <div className="detective-node detective-node--main" id={`node-${id}`}
      style={{ ...style, '--node-rot': `${rotation}deg` }}>
      <PushPin color={pinColor} size={20}
        style={{ position: 'absolute', top: -8, left: '50%', transform: 'translateX(-50%)', zIndex: 10 }} />
      <TapeStrip width={50} rotation={rotation > 0 ? -15 : 15}
        style={{ position: 'absolute', top: -6, right: 10 }} />
      <div className="polaroid">
        <div className="polaroid-photo"><Icon /></div>
        <div className="polaroid-caption font-hand">{label}</div>
      </div>
      <div className="node-children">{children}</div>
    </div>
  );
}
