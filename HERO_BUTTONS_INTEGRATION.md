# Hero Section Button Integration

This document explains the integration between the hero section buttons and the form dialog.

## What Was Done

### 1. Enhanced Button Hover Effect
Added a "pop-out" effect to the hero buttons:
- `hover:scale-105` - Scales button to 105% on hover
- `duration-200` - Smooth 200ms transition
- `active:scale-95` - Slightly scales down when clicked for tactile feedback

### 2. Connected Buttons to Dialog
Both "Join as Startup" and "Join as Investor" buttons now:
- Open the `JoinNowDialog` component
- Automatically select the appropriate tab (Startup or Investor)
- Maintain state synchronization

### 3. Made Dialog Controllable
Updated `JoinNowDialog` component to accept props:
- `open` - Control dialog open/close state from parent
- `onOpenChange` - Callback when dialog state changes
- `defaultTab` - Which tab to show ("startup" or "investor")

The dialog can still be used standalone (via "Join Now" button in navbar) or controlled by parent components.

## Implementation Details

### Page Component (`app/page.tsx`)
```typescript
const [dialogOpen, setDialogOpen] = useState(false)
const [activeTab, setActiveTab] = useState<"startup" | "investor">("startup")

const handleOpenDialog = (tab: "startup" | "investor") => {
  setActiveTab(tab)
  setDialogOpen(true)
}
```

### Dialog Component (`components/startup-form.tsx`)
```typescript
interface JoinNowDialogProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  defaultTab?: "startup" | "investor"
}
```

The component uses a hybrid controlled/uncontrolled pattern:
- If `open` and `onOpenChange` are provided, it's controlled by parent
- Otherwise, it manages its own state (for navbar usage)

## User Experience

1. **Hero Section**: User clicks "Join as Startup" or "Join as Investor"
2. **Button Animation**: Button scales up on hover, down on click
3. **Dialog Opens**: Form dialog appears with the correct tab pre-selected
4. **Form Submission**: User fills out and submits the form
5. **Dialog Closes**: After successful submission, dialog closes automatically

## Technical Notes

- Made `app/page.tsx` a client component (`"use client"`) to handle state
- Dialog maintains its own submission state independently
- Tab switching is disabled during form submission
- All existing functionality (navbar "Join Now" button) continues to work

