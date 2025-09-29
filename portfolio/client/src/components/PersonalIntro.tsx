import profileImage from '@assets/images/headshot.png';

export default function PersonalIntro() {
  return (
    <section className="w-full py-16 bg-white/95 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-start space-x-6">
          <div className="flex-shrink-0">
            <div className="w-60 h-60 rounded-full overflow-hidden shadow-lg">
              <img 
                src={profileImage} 
                alt="Timothy Choi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="flex-1">
            <h2 className="text-3xl font-serif font-medium text-foreground mb-4">
              Hi, I'm Tim 👋
            </h2>
            
            <div className="text-muted-foreground leading-relaxed space-y-4">
              <p>
                I'm a <strong>Design Engineer</strong> who builds digital products from concept to launch 🚀 
                With a Computer Science background and a passion for design aesthetics, 
                I create seamless web and mobile experiences using <strong>React</strong>, modern UI/UX 
                principles, and agile development practices ⚡ 

                My unique blend of technical expertise and design sensibility allows me 
                to craft solutions that are both beautiful and implementable—bridging 
                the gap between what users want and what developers can build 💡 Always 
                exploring the intersection of code and creativity ✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}