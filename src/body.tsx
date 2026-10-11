import banner from './banner-stack.png';

function Body() {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '60px 80px', background: '#fff' }}>
            
        
            <div style={{ maxWidth: '550px' }}>
                <h1 style={{ fontSize: '48px', fontWeight: '800', lineHeight: '1.2', color: '#111827', margin: '0 0 15px 0' }}>
                    Build Your Ideal <br />
                    <span style={{ background: 'linear-gradient(90deg, #f97316 0%, #db2777 50%, #9333ea 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        Development Stack
                    </span>
                </h1>
                
                <p style={{ color: '#4b5563', fontSize: '16px', lineHeight: '1.6', margin: '0 0 30px 0' }}>
                    Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
                </p>

                <div style={{ display: 'flex', gap: '15px' }}>
                    <button style={{ background: 'linear-gradient(135deg, #f97316, #db2777)', color: '#fff', border: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', fontSize: '15px' }}>
                        Explore Technologies
                    </button>
                    <button style={{ background: '#fff', color: '#374151', border: '1px solid #e5e7eb', padding: '12px 24px', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', fontSize: '15px' }}>
                        Learn More
                    </button>
                </div>
            </div>

          
            <div style={{ maxWidth: '480px' }}>
                <img src={banner} alt="Banner" style={{ width: '100%', height: 'auto' }} />
            </div>

        </div>
    );
}

export default Body;