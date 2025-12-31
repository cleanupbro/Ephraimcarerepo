"use client";

import { StickyCTA } from "./sticky-cta";
import { BackToTop } from "./back-to-top";
import { MobileCallButton } from "./mobile-call-button";
import { LiveChat } from "./live-chat";

export function FloatingButtons() {
  return (
    <>
      {/* Desktop floating buttons */}
      <StickyCTA />
      <BackToTop />

      {/* Mobile floating button bar */}
      <MobileCallButton />

      {/* Live Chat Widget (enable when credentials are set) */}
      <LiveChat />
    </>
  );
}
