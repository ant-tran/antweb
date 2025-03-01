import React from 'react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface TooltipButtonProps {
  src: string;
  alt: string;
  label: string;
}

const TooltipButton: React.FC<TooltipButtonProps> = ({ src, alt, label }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button className='bg-[var(--color-black-3)] rounded-lg py-10 px-4 min-w-[80px]'>
          <img className='h-12 w-12' src={src} alt={alt} />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export default TooltipButton;