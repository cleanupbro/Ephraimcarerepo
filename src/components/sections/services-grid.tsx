"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { services } from "@/data/services";
import { images } from "@/data/images";
import { cn } from "@/lib/utils";
import { FadeIn, StaggerContainer, StaggerItem, ScaleOnHover } from "@/components/animations";
import { motion } from "motion/react";
import { useState } from "react";

export function ServicesGrid() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section className="section bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50 rounded-full opacity-50 blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-50 rounded-full opacity-50 blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-wide relative z-10">
        {/* Section header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Comprehensive NDIS Support
          </span>
          <h2 className="text-balance">Our 8 Core Services</h2>
          <p className="mt-4 text-lg text-neutral-600">
            Tailored support designed around your individual needs and goals.
            From personal care to community access, we are here to help you thrive.
          </p>
        </FadeIn>

        {/* Services grid */}
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            const serviceImage = images.services[service.slug as keyof typeof images.services];
            const isHovered = hoveredService === service.id;

            return (
              <StaggerItem key={service.id}>
                <ScaleOnHover scale={1.03}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group block h-full rounded-2xl border border-neutral-200 bg-white overflow-hidden hover:border-primary-300 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 no-underline"
                    onMouseEnter={() => setHoveredService(service.id)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    {/* Image */}
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={serviceImage?.image || images.hero.main}
                        alt={serviceImage?.alt || service.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                      {/* Icon overlay */}
                      <motion.div
                        initial={{ scale: 1 }}
                        animate={{ scale: isHovered ? 1.1 : 1 }}
                        className={cn(
                          "absolute bottom-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg",
                          service.color === "primary"
                            ? "bg-primary text-white"
                            : "bg-secondary text-white"
                        )}
                      >
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      {/* Title */}
                      <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-primary transition-colors">
                        {service.name}
                      </h3>

                      {/* Description */}
                      <p className="mt-2 text-sm text-neutral-600 line-clamp-2">
                        {service.description}
                      </p>

                      {/* Features preview */}
                      <div className="mt-3 flex flex-wrap gap-1">
                        {service.features.slice(0, 2).map((feature, index) => (
                          <span
                            key={index}
                            className="text-xs px-2 py-1 rounded-full bg-neutral-100 text-neutral-600"
                          >
                            {feature.split(" ").slice(0, 2).join(" ")}...
                          </span>
                        ))}
                      </div>

                      {/* Link */}
                      <div className="mt-4 flex items-center text-sm font-medium text-primary group-hover:text-primary-800">
                        <span>Learn more</span>
                        <ArrowRight
                          className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-2"
                          aria-hidden="true"
                        />
                      </div>
                    </div>

                    {/* Hover border effect */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isHovered ? 1 : 0 }}
                      className="h-1 bg-gradient-to-r from-primary to-secondary origin-left"
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </ScaleOnHover>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* View all link */}
        <FadeIn delay={0.5} className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-50 text-primary font-semibold hover:bg-primary-100 transition-colors no-underline group"
          >
            <span>View All Services</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
