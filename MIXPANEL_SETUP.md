# Mixpanel Analytics Implementation

## Files Created/Modified

### New Files:
1. `src/lib/analytics/mixpanel.ts` - Core Mixpanel utilities
2. `src/hooks/usePageTracking.ts` - Hook for tracking page views
3. `src/components/PageTracker.tsx` - Component to track route changes

### Modified Files:
1. `src/main.tsx` - Added Mixpanel initialization
2. `src/App.tsx` - Added PageTracker component
3. `src/components/LanguageSelector.tsx` - Added language change tracking
4. `src/components/generated/SleepCalculator.tsx` - Added calculation and time selection tracking

## Environment Setup

Create `.env` file in project root:
```
VITE_MIXPANEL_TOKEN=your_token_here
```

Get your token from: https://mixpanel.com/project/settings

## Events Tracked

1. **Page Viewed** - On every route change
   - Properties: path, language, page

2. **Sleep Times Calculated** - When calculation results are generated
   - Properties: calculation_type, input_time_bucket, cycle_length, fall_asleep_time, num_suggestions, cycles_range

3. **Wake Time Selected** - When user clicks a wake time suggestion
   - Properties: time_bucket, cycles, total_minutes, is_recommended

4. **Bedtime Selected** - When user clicks a bedtime suggestion
   - Properties: time_bucket, cycles, total_minutes, is_recommended

5. **Language Changed** - When user changes language
   - Properties: from, to

## Privacy

- No PII (Personally Identifiable Information) is tracked
- Times are bucketed into ranges (e.g., "06:00-07:00") instead of exact timestamps
- All tracking respects user privacy
