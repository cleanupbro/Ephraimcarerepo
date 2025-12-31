"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { services } from "@/data/services";
import { images } from "@/data/images";
import { CTABanner } from "@/components/sections/cta-banner";
import { cn } from "@/lib/utils";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { motion } from "motion/react";

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="section bg-gradient-to-br from-primary-50 via-white to-secondary-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-100 rounded-full opacity-50 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary-100 rounded-full opacity-50 blur-3xl" />
        </div>

        <div className="container-wide relative z-10">
          <FadeIn className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 border border-primary-200 mb-6">
              <Sparkles className="h-5 w-5 text-primary" aria-hidden="true" />
              <span className="text-sm font-semibold text-primary-800">
                8 Core Service Areas
              </span>
            </span>

            <h1 className="text-balance">Our NDIS Support Services</h1>

            <p className="mt-6 text-xl text-neutral-600">
              Comprehensive, person-centred support tailored to your individual
              needs and goals. We work with you to achieve greater independence
              and quality of life.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services List */}
      <section className="section bg-white">
        <div className="container-wide">
          <StaggerContainer staggerDelay={0.1} className="space-y-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              const serviceImage = images.services[service.slug as keyof typeof images.services];

              return (
                <StaggerItem key={service.id}>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={cn(
                      "grid lg:grid-cols-2 gap-8 items-center p-8 rounded-3xl border border-neutral-200 overflow-hidden",
                      isEven ? "bg-white hover:shadow-xl" : "bg-neutral-50 hover:shadow-xl"
                    )}
                  >
                    <div className={cn(!isEven && "lg:order-2")}>
                      {/* Service image */}
                      <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                        <Image
                          src={serviceImage?.image || images.hero.main}
                          alt={serviceImage?.alt || service.name}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                        {/* Icon overlay */}
                        <div
                          className={cn(
                            "absolute bottom-4 left-4 w-14 h-14 rounded-xl flex items-center justify-center shadow-lg",
                            service.color === "primary"
                              ? "bg-primary text-white"
                              : "bg-secondary text-white"
                          )}
                        >
                          <Icon className="h-7 w-7" aria-hidden="true" />
                        </div>
                      </div>

                      <h2 className="text-2xl font-bold text-neutral-900">
                        {service.name}
                      </h2>

                      <p className="mt-3 text-lg text-neutral-600">
                        {service.longDescription}
                      </p>

                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center mt-4 text-lg font-semibold text-primary hover:text-primary-800 group no-underline"
                      >
                        Learn more about {service.shortName}
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </Link>
                    </div>

                    <div className={cn(!isEven && "lg:order-1")}>
                      <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
                        <h3 className="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          What we offer:
                        </h3>
                        <ul className="space-y-3">
                          {service.features.map((feature, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.05 * i }}
                              className="flex items-start gap-3"
                            >
                              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                              <span className="text-neutral-700">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
