import { Button } from './Button';

export const NewPage = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>New Page</h1>
      <p>Welcome to the new page!</p>
      
      <div style={{ marginTop: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <Button onClick={handleClick}>Primary Button</Button>
        <Button variant="secondary" onClick={handleClick}>Secondary Button</Button>
        <Button variant="outline" onClick={handleClick}>Outline Button</Button>
      </div>
      
      <div style={{ marginTop: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <Button size="small" onClick={handleClick}>Small</Button>
        <Button size="medium" onClick={handleClick}>Medium</Button>
        <Button size="large" onClick={handleClick}>Large</Button>
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <Button disabled onClick={handleClick}>Disabled Button</Button>
      </div>
    </div>
  );
};

export default NewPage;
