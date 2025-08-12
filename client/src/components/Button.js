import React from 'react';
import '../stylesheets/button.css';  // adjust path if needed

function Button({ title, onClick, variant = 'filled', disabled = false, fullWidth = false, type = 'button' }) {
  let className = 'btn';

  if (variant === 'outlined') {
    className += ' outlined';
  }
  if (fullWidth) {
    className += ' full-width'; // You can define .full-width { width: 100%; } in your CSS
  }

  return (
    <button className={className} onClick={onClick} disabled={disabled} type={type}>
      {title}
    </button>
  );
}

export default Button;
