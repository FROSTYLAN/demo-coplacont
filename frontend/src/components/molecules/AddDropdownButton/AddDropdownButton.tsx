import React, { useState, useRef, useEffect } from 'react';
import styles from './AddDropdownButton.module.scss';
import { Button } from '@/components';

interface DropdownOption {
  label: string;
  onClick: () => void;
}

interface AddDropdownButtonProps {
  options: DropdownOption[];
}

export const AddDropdownButton: React.FC<AddDropdownButtonProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <Button 
        size="large" 
        onClick={toggleDropdown}
        className={styles.dropdownButton}
      >
        Agregar nuevo
        <svg 
          className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`}
          width="12" 
          height="8" 
          viewBox="0 0 12 8" 
          fill="none"
        >
          <path 
            d="M1 1.5L6 6.5L11 1.5" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </Button>
      
      {isOpen && (
        <div className={styles.dropdownMenu}>
          {options.map((option, index) => (
            <button
              key={index}
              className={styles.dropdownItem}
              onClick={() => {
                option.onClick();
                setIsOpen(false);
              }}
            >
              + {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};