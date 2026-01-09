import mixpanel from 'mixpanel-browser';

let isInitialized = false;

/**
 * Initialize Mixpanel with token from environment variables
 * Only initializes once, even if called multiple times
 */
export function initMixpanel(): void {
  if (isInitialized) {
    return;
  }

  const token = import.meta.env.VITE_MIXPANEL_TOKEN;

  if (!token || token.trim() === '') {
    console.warn('Mixpanel: No token provided. Analytics will be disabled.');
    return;
  }

  try {
    mixpanel.init(token, {
      persistence: 'localStorage',
      track_pageview: true,
      ignore_dnt: true, // Respect Do Not Track
    });

    isInitialized = true;
    console.log('Mixpanel initialized successfully');
  } catch (error) {
    console.error('Failed to initialize Mixpanel:', error);
  }
}

/**
 * Track an event with optional properties
 * @param event - Event name
 * @param props - Optional event properties (no PII allowed)
 */
export function track(event: string, props?: Record<string, any>): void {
  if (!isInitialized) {
    return;
  }

  try {
    mixpanel.track(event, props);
  } catch (error) {
    console.error('Failed to track event:', error);
  }
}

/**
 * Identify a user (use anonymous ID, not PII)
 * @param userId - User identifier (should be anonymous/hashed, not PII)
 */
export function identify(userId: string): void {
  if (!isInitialized) {
    return;
  }

  try {
    mixpanel.identify(userId);
  } catch (error) {
    console.error('Failed to identify user:', error);
  }
}

/**
 * Set user properties (no PII allowed)
 * @param props - User properties object
 */
export function setUserProps(props: Record<string, any>): void {
  if (!isInitialized) {
    return;
  }

  try {
    mixpanel.people.set(props);
  } catch (error) {
    console.error('Failed to set user properties:', error);
  }
}

/**
 * Reset Mixpanel (clear user data)
 */
export function reset(): void {
  if (!isInitialized) {
    return;
  }

  try {
    mixpanel.reset();
  } catch (error) {
    console.error('Failed to reset Mixpanel:', error);
  }
}

/**
 * Bucket a time (hours:minutes) into a range for privacy
 * @param hours - Hour (0-23)
 * @param minutes - Minutes (0-59)
 * @returns Time range string like "06:00-07:00"
 */
export function bucketTime(hours: number, minutes: number): string {
  // Round down to nearest hour for start of range
  const startHour = hours;
  const endHour = (hours + 1) % 24;
  
  const formatHour = (h: number) => String(h).padStart(2, '0');
  
  return `${formatHour(startHour)}:00-${formatHour(endHour)}:00`;
}



