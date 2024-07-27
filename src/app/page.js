'use client';
import { BannerSection } from "@/content/BannerSection";
import { AboutSection } from "@/content/AboutSection";
import { FeaturedSection } from "@/content/FeaturedSection";
import { OurLatestSection } from "@/content/OurLatestSection";
import { SubscribeSection } from "@/content/SubscribeSection";
import { CommunitySection } from "@/content/CommunitySection";
import { LatestNewsSection } from "@/content/LatestNewsSection";
import { SliderSection } from "@/content/SliderSection";

export default function Home() {
  return (
    <>
      <BannerSection />
      <FeaturedSection />
      <AboutSection />
      <OurLatestSection />
      <CommunitySection />
      <LatestNewsSection />
      {/* <SliderSection /> */}
      <SubscribeSection />
    </>
  );
}
