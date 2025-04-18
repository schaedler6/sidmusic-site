import "@fontsource/montserrat";
import './index.css';

const musicas = [
  {
    title: "Entre Dois Mundos Filha",
    desc: "Single • 2024",
    img: "/src/assets/Capa_Entre_Dois_Mundos_Filha.png",
    link: "https://open.spotify.com/intl-pt/artist/4JpSt47bo8afDdSu7DqSH4?si=-jRW8C67Sa604ONTrbhwPg"
  },
  {
    title: "Mundo Novo",
    desc: "Single • 2024",
    img: "/src/assets/Sid_Schaedler_Novo_Mundo.png",
    link: "https://youtu.be/mxD-aY13H14?si=NY5RHGQAGUS11kp2"
  },
];

export default function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        background: "url(https://sidmusic.com.br/assets/Sidcapa-Dio_qX7U.jpg) center/cover no-repeat",
        position: 'relative',
        fontFamily: 'Montserrat, sans-serif',
      }}
    >
      {/* Overlay de gradiente */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)',
          zIndex: 1
        }}
      />

      <main style={{position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', gap: 36}}>
        {/* Nome e subtítulo - Corrigindo a grafia */}
        <h1 style={{fontSize: 48, fontWeight: 'bold', color: '#fff', lineHeight: 1, textAlign: 'center', marginTop: -30}}>Sid Schaedler</h1>
        <h2 style={{fontSize: 26, color: '#FFD700', marginBottom: 6, textAlign: 'center', fontWeight: 400}}>Compositor</h2>

        {/* Social icons - Novos ícones e estilos baseados na imagem de referência */}
        <div style={{display: 'flex', gap: 20, justifyContent: 'center', margin: '8px 0'}}>
          {/* Twitter icon */}
          <a href="https://twitter.com/sidschaedler" target="_blank" rel="noopener noreferrer"
             style={{
               background: '#000',
               borderRadius: '50%',
               width: 50,
               height: 50,
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               boxShadow: '0 4px 8px rgba(0,0,0,0.5)'
             }}>
            <svg width="24" height="24" fill="#fff" viewBox="0 0 24 24">
              <path d="M22,5.8a8.6,8.6,0,0,1-2.36.65,4.07,4.07,0,0,0,1.8-2.27,8.1,8.1,0,0,1-2.6,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.4,4.62a4.16,4.16,0,0,0-.55,2.07,4.09,4.09,0,0,0,1.82,3.41,4.05,4.05,0,0,1-1.86-.51v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z" />
            </svg>
          </a>

          {/* Youtube icon */}
          <a href="https://www.youtube.com/@Sid.Schaedler.compositor" target="_blank" rel="noopener noreferrer"
             style={{
               background: '#f00',
               borderRadius: '50%',
               width: 50,
               height: 50,
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               boxShadow: '0 4px 8px rgba(0,0,0,0.5)'
             }}>
            <svg width="24" height="24" fill="#fff" viewBox="0 0 24 24">
              <path d="M23.498 6.186a2.992 2.992 0 0 0-2.106-2.117C19.633 3.612 12.001 3.612 12.001 3.612s-7.632 0-9.391.457A2.992 2.992 0 0 0 .505 6.186C.048 7.946.048 12 .048 12s0 4.054.457 5.814a2.994 2.994 0 0 0 2.106 2.117c1.759.457 9.391.457 9.391.457s7.632 0 9.391-.457a2.994 2.994 0 0 0 2.106-2.117c.457-1.76.457-5.814.457-5.814s0-4.054-.457-5.814zm-13.716 9.569V7.936l6.357 3.91-6.357 3.909z" />
            </svg>
          </a>

          {/* Email icon */}
          <a href="mailto:sidicompositor@gmail.com" target="_blank" rel="noopener noreferrer"
             style={{
               background: '#e74c3c',
               borderRadius: '50%',
               width: 50,
               height: 50,
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               boxShadow: '0 4px 8px rgba(0,0,0,0.5)'
             }}>
            <svg width="24" height="24" fill="#fff" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
        </div>
        <div style={{color:'#ffd700', fontSize:16}}>Perfil alternativo: <a href="https://www.tiktok.com/@sidschaedler" style={{color:'#ffd700',textDecoration:'underline'}}>@sidschaedler</a></div>

        {/* Card da lista de músicas */}
        <div style={{background: 'rgba(20,14,8,0.92)', borderRadius: 22, boxShadow: '0 6px 54px 12px #000B', padding: 36, minWidth: 340, maxWidth: 400}}>
          <div style={{fontSize: 26, color: '#ffd700', fontWeight: 600, marginBottom: 24}}>Músicas</div>
          <div style={{display: 'flex', flexDirection: 'column', gap: 22}}>
            {musicas.map((m, i) => (
              <div key={i} style={{display: 'flex', alignItems: 'center', padding: '12px 20px', borderRadius: 14, background: 'rgba(40,30,20,0.91)', boxShadow:'0 2px 16px 2px #1117', gap: 18, cursor:'pointer'}}>
                <img src={m.img} alt={m.title} style={{width: 60, height: 60, borderRadius: 12, objectFit:'cover', boxShadow:'0 2px 8px #000A'}} />
                <div style={{flex:1}}>
                  <div style={{color:'#fff', fontSize:20, fontWeight:600}}>{m.title}</div>
                  <div style={{color:'#ffd700', fontSize:14, opacity:0.95}}>{m.desc}</div>
                </div>
                <a href={m.link} target="_blank" rel="noopener noreferrer" style={{background: '#ffd700', borderRadius: '50%', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: 42, height: 42, boxShadow:'0 3px 24px #FFD60066'}}>
                  <svg width="28" height="28" fill="#210" viewBox="0 0 24 24"><path d="M7.5 5.5v13l11-6.5z"/></svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{position:'relative', zIndex:4, marginTop:44, paddingBottom:12, color:'#ccc', fontSize:14, fontWeight:400, textAlign:'center'}}>
        <div style={{marginTop:18}}>
          © 2024 Sid Schaedler
        </div>
      </footer>
    </div>
  );
}
