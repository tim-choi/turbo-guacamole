// components/Background.tsx
import backgroundImage from '@assets/images/background.png';

export default function Background() {
  return (
    <div 
      className="fixed inset-0 -z-10"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
    />
  );
}