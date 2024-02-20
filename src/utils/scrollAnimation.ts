const colors = {
  accent: '#0052F2',
  strokeColor: '#CBD8E5',
};

type scrollAnimationProps = {
  entry: IntersectionObserverEntry;
  isTracking?: boolean;
  onActive?: (acitve: boolean) => void;
};

export const scrollAnimation = ({
  entry,
  isTracking,
  onActive,
}: scrollAnimationProps): void => {
  const halfScreenHeight = window.innerHeight / 2;
  const rect = entry.target.getBoundingClientRect();
  const depthPx = rect.bottom - halfScreenHeight;
  const depthPercent = (depthPx * 100) / rect.height;
  const element = entry.target as HTMLElement;

  if (rect.bottom > halfScreenHeight && rect.top < halfScreenHeight) {
    if (isTracking) {
      element.style.background = `linear-gradient(to top, ${colors.strokeColor} ${depthPercent}%, ${colors.accent} ${depthPercent}% 100%)`;
    } else {
      onActive && onActive(true);
    }
  }

  if (rect.bottom < halfScreenHeight) {
    if (isTracking) {
      element.style.background = `linear-gradient(to top, ${colors.accent} 0%, ${colors.accent}  100%)`;
    }
    onActive && onActive(true);
  }

  if (rect.top > halfScreenHeight) {
    if (isTracking) {
      element.style.background = `linear-gradient(to top, ${colors.strokeColor} 0%, ${colors.strokeColor}  100%)`;
    }
    onActive && onActive(false);
  }
};
