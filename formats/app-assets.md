# App artwork and store assets

Checked 2026-10-21 against official [Apple product-page guidance](https://developer.apple.com/app-store/product-page/), [Play preview-asset requirements](https://support.google.com/googleplay/android-developer/answer/9866151?hl=en), [Play icon guidance](https://developer.android.com/distribute/google-play/resources/icon-design-specifications) and [Android adaptive-icon guidance](https://developer.android.com/develop/ui/compose/system/icon_design_adaptive).

| Asset | Delivery contract | Build approach |
|---|---|---|
| `app-play-icon` | 512x512 PNG; Play currently specifies 32-bit with alpha and a 1024 KB maximum. No manually baked rounded mask or drop shadow. | Approve concept; build/export with native icon tooling. |
| `app-play-feature` | 1024x500 JPEG or 24-bit PNG without alpha. Platform cutoff and overlay areas must be checked in context. | Generate art then composite approved UI/type. |
| iOS/store screenshots | Use current device-specific slot dimensions from the destination console. Actual app UI captures; feature-to-frame ledger and approved copy. No universal screenshot dimensions recorded here. | Composite captured UI; proof each device and locale. |
| Android adaptive launcher | Separate registered foreground/background and monochrome resources; use the current platform template, safe regions and masks. Different contract from the store listing icon. | Native resource assembly and actual launcher preview. |
| Onboarding/empty-state art | Slot dimensions, density variants, alpha, theme treatment and optimized byte budget come from the actual app. No universal canvas. | Separate decorative art from live text and controls. |
| Light/dark and badges | Shared origin, optical scale, semantic meaning and export manifest; measure contrast on actual surfaces. | Export isolated assets and inspect in the app. |

Only the two fixed Play sizes have reusable presets in [specs.json](../post/specs.json). The existing resize helper converts images to RGB and therefore must not produce the final alpha-bearing Play icon; use native icon export tooling. The resizing/check scripts verify basic file properties; they do not certify platform policy, native resource behavior, exact bit depth, artwork permissions or accessibility. Verify these separately. The feature-graphic preset's file-weight budget is a studio target, not a verified Play maximum. Do not add arbitrary universal app screenshot sizes or claim a generated image is a working UI.

New platform requirements can change; recheck the linked official specification when preparing a release. Keep generated-output dimensions separate from downstream export targets.
