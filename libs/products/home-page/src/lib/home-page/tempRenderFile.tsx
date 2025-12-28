/*
 * TEMPORARY FILE - FOR DEMO PURPOSES ONLY
 * This file is temporary and will be deleted once the draft is accepted.
 */

import React from 'react';

// React wrapper component for rendering
const RenderComponent: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        textAlign: 'center',
        padding: '60px 20px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white'
      }}>
        <h1 style={{
          fontSize: '48px',
          fontWeight: 700,
          margin: '0 0 16px 0',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
        }}>Discover Amazing Products</h1>
        <p style={{
          fontSize: '20px',
          fontWeight: 300,
          margin: 0,
          opacity: 0.95
        }}>Explore our curated collection of premium items</p>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '40px 20px',
        flex: 1
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '30px',
          maxWidth: '1200px',
          width: '100%'
        }}>
          {[
            { id: 1, name: 'Premium Wireless Headphones', price: 299.99, color: '#667eea' },
            { id: 2, name: 'Smart Watch Pro', price: 399.99, color: '#764ba2' },
            { id: 3, name: 'Laptop Backpack', price: 79.99, color: '#f093fb' },
            { id: 4, name: 'Wireless Mouse', price: 49.99, color: '#4facfe' },
            { id: 5, name: 'Mechanical Keyboard', price: 149.99, color: '#43e97b' },
            { id: 6, name: 'USB-C Hub', price: 59.99, color: '#fa709a' }
          ].map((product) => (
            <div key={product.id} style={{
              background: 'white',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}>
              <div style={{
                width: '100%',
                height: '280px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: `linear-gradient(135deg, ${product.color} 0%, ${product.color}dd 100%)`
              }}>
                <div style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '48px',
                  color: 'white',
                  fontWeight: 'bold'
                }}>
                  {product.name.charAt(0)}
                </div>
              </div>
              <div style={{
                padding: '20px',
                textAlign: 'center'
              }}>
                <h2 style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  margin: '0 0 12px 0',
                  color: '#2d3748',
                  lineHeight: 1.4
                }}>{product.name}</h2>
                <p style={{
                  margin: 0,
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#667eea'
                }}>${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RenderComponent;
