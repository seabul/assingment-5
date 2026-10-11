import logo from './logo-text.png';

const Nav = () => {
  return (
    <div style={{width: '100%', background: '#fff', borderBottom: '1px solid #ddd'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 40px'}}>
        
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <img src={logo} alt="Logo" style={{height: '35px'}} />
        </div>

        <ul style={{display: 'flex', listStyle: 'none', gap: '25px', margin: 0}}>
          <li><a href="#" style={{color: '#db2777', textDecoration: 'none', fontWeight: 'bold'}}>Home</a></li>
          <li><a href="#" style={{color: '#555', textDecoration: 'none'}}>Technologies</a></li>
          <li><a href="#" style={{color: '#555', textDecoration: 'none'}}>Projects</a></li>
          <li><a href="#" style={{color: '#555', textDecoration: 'none'}}>About</a></li>
          <li><a href="#" style={{color: '#555', textDecoration: 'none'}}>Contact</a></li>
        </ul>
        <div>
          <span style={{marginRight: '20px', color: '#333', cursor: 'pointer'}}>Sign In</span>
          <button style={{background: '#db2777', color: '#fff', border: 'none', padding: '8px 18px', borderRadius: '20px', cursor: 'pointer'}}>Sign Up</button>
        </div>

      </div>
    </div>
  );
};

export default Nav;