export const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Academic':
    case 'STEM':
      return 'bg-secondary text-secondary-foreground';
    case 'Sports':
      return 'bg-destructive text-destructive-foreground';
    case 'Arts':
    case 'Cultural':
      return 'bg-accent text-accent-foreground';
    case 'Environment':
      return 'bg-primary text-primary-foreground';
    case 'Service':
      return 'bg-destructive text-destructive-foreground';
    case 'Music':
      return 'bg-muted text-muted-foreground';
    default:
      return 'bg-muted text-muted-foreground';
  }
};