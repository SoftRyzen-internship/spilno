import tailwindConfig from '../../tailwind.config';

type ScrollAnimationProps = {
  entry: IntersectionObserverEntry;
  isTracking?: boolean;
  onActive?: (acitve: boolean) => void;
};

type TColors = Record<string, string>;

const colors: TColors = tailwindConfig.theme?.extend?.colors as TColors;

export const scrollAnimation = ({
  entry,
  isTracking,
  onActive,
}: ScrollAnimationProps): void => {
  const halfScreenHeight = window.innerHeight / 2;
  const rect = entry.target.getBoundingClientRect();
  const depthPx = rect.bottom - halfScreenHeight;
  const depthPercent = (depthPx * 100) / rect.height;
  const element = entry.target as HTMLElement;

  if (rect.bottom > halfScreenHeight && rect.top < halfScreenHeight) {
    if (isTracking) {
      element.style.background = `linear-gradient(to top, ${colors.strokeColor} ${depthPercent}%, ${colors.accent} ${depthPercent - 10}%, ${colors.accent}  90%, ${colors.white} 100%)`;
    } else {
      onActive && onActive(true);
    }
  }

  if (rect.bottom < halfScreenHeight) {
    if (isTracking) {
      element.style.background = `linear-gradient(to top, ${colors.accent} 0%, ${colors.accent}  90%, ${colors.white} 100%)`;
    }

    onActive && onActive(true);
  }

  if (rect.top > halfScreenHeight) {
    if (isTracking) {
      element.style.background = `linear-gradient(to top, ${colors.strokeColor} 0%, ${colors.strokeColor}  90%,  ${colors.white} 100%)`;
    }

    onActive && onActive(false);
  }
};
