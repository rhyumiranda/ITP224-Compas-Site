import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SiteFooter } from "@/components/pages/site-footer"

export default function TermsPrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">

      <main className="flex-1 container px-4 md:px-6 py-8 md:py-12 max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-black mb-6">
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to home
        </Link>

        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold">Legal Information</h1>
          <p className="text-gray-500">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>

          <Tabs defaultValue="terms" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="terms">Terms of Service</TabsTrigger>
              <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
            </TabsList>
            <TabsContent value="terms" className="mt-6 space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold">1. Introduction</h2>
                <p>
                  Welcome to Compass Adventures. These Terms of Service ("Terms") govern your use of our website,
                  products, and services ("Services"). By accessing or using our Services, you agree to be bound by
                  these Terms. If you disagree with any part of the Terms, you may not access the Services.
                </p>
              </section>

              <Separator />

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">2. Acceptance of Terms</h2>
                <p>
                  By creating an account, making a booking, or otherwise using our Services, you acknowledge that you
                  have read and understood these Terms and agree to be bound by them. If you are using our Services on
                  behalf of a company or other legal entity, you represent that you have the authority to bind such
                  entity to these Terms.
                </p>
              </section>

              <Separator />

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">3. User Accounts</h2>
                <p>
                  When you create an account with us, you must provide accurate, complete, and current information. You
                  are responsible for safeguarding the password that you use to access the Services and for any
                  activities or actions under your password. We encourage you to use a strong password (a combination of
                  upper and lower case letters, numbers, and symbols) with your account.
                </p>
                <p>
                  You agree not to disclose your password to any third party. You must notify us immediately upon
                  becoming aware of any breach of security or unauthorized use of your account.
                </p>
              </section>

              <Separator />

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">4. Booking and Payments</h2>
                <p>
                  All bookings are subject to availability. We reserve the right to refuse any booking without giving
                  reasons. A booking is not confirmed until we issue a confirmation notice and receive full payment or
                  the required deposit.
                </p>
                <p>
                  Payment methods accepted are specified during the booking process. All payments must be made in the
                  currency specified. You agree to pay all charges at the prices then in effect for your bookings.
                </p>
                <p>
                  Prices for our adventure packages are subject to change without notice. We reserve the right to modify
                  or discontinue any Service without notice at any time.
                </p>
              </section>

              <Separator />

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">5. Cancellation Policy</h2>
                <p>
                  Cancellations must be made in writing. Refunds will be issued according to the following schedule:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Cancellations made 60 days or more before departure: Full refund minus a $100 administrative fee
                  </li>
                  <li>Cancellations made 30-59 days before departure: 50% refund</li>
                  <li>Cancellations made less than 30 days before departure: No refund</li>
                </ul>
                <p>
                  We strongly recommend purchasing travel insurance to protect against unforeseen circumstances that may
                  require you to cancel your trip.
                </p>
              </section>

              <Separator />

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">6. User Conduct</h2>
                <p>You agree not to use our Services:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>In any way that violates any applicable national or international law or regulation</li>
                  <li>
                    To transmit, or procure the sending of, any advertising or promotional material, including any "junk
                    mail", "chain letter", "spam", or any other similar solicitation
                  </li>
                  <li>
                    To impersonate or attempt to impersonate Compass Adventures, a Compass Adventures employee, another
                    user, or any other person or entity
                  </li>
                  <li>
                    To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Services,
                    or which may harm Compass Adventures or users of the Services
                  </li>
                </ul>
              </section>

              <Separator />

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">7. Intellectual Property</h2>
                <p>
                  The Service and its original content, features, and functionality are and will remain the exclusive
                  property of Compass Adventures and its licensors. The Service is protected by copyright, trademark,
                  and other laws of both the United States and foreign countries. Our trademarks and trade dress may not
                  be used in connection with any product or service without the prior written consent of Compass
                  Adventures.
                </p>
              </section>

              <Separator />

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">8. Limitation of Liability</h2>
                <p>
                  In no event shall Compass Adventures, nor its directors, employees, partners, agents, suppliers, or
                  affiliates, be liable for any indirect, incidental, special, consequential or punitive damages,
                  including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
                  resulting from your access to or use of or inability to access or use the Services.
                </p>
                <p>
                  Compass Adventures assumes no responsibility for errors, omissions, or inconsistencies in the content
                  provided on the Services. We do not warrant that the Services are free of viruses or other harmful
                  components.
                </p>
              </section>

              <Separator />

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">9. Indemnification</h2>
                <p>
                  You agree to defend, indemnify, and hold harmless Compass Adventures, its parent, subsidiaries,
                  affiliates, and their respective directors, officers, employees, and agents from and against all
                  claims, damages, obligations, losses, liabilities, costs or debt, and expenses arising from your use
                  of the Services.
                </p>
              </section>

              <Separator />

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">10. Governing Law</h2>
                <p>
                  These Terms shall be governed and construed in accordance with the laws of the United States, without
                  regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms
                  will not be considered a waiver of those rights.
                </p>
              </section>

              <Separator />

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">11. Changes to Terms</h2>
                <p>
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                  revision is material, we will try to provide at least 30 days' notice prior to any new terms taking
                  effect. What constitutes a material change will be determined at our sole discretion.
                </p>
                <p>
                  By continuing to access or use our Services after those revisions become effective, you agree to be
                  bound by the revised terms. If you do not agree to the new terms, please stop using the Services.
                </p>
              </section>
            </TabsContent>

            <TabsContent value="privacy" className="mt-6 space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold">1. Information We Collect</h2>
                <p>We collect several types of information from and about users of our Services, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Personal Information:</strong> Name, email address, postal address, phone number, date of
                    birth, passport information, and payment information when you create an account or make a booking.
                  </li>
                  <li>
                    <strong>Usage Data:</strong> Information about how you access and use our Services, including your
                    IP address, browser type, device information, pages visited, and referring/exit pages.
                  </li>
                  <li>
                    <strong>Communications:</strong> Records of correspondence if you contact us.
                  </li>
                  <li>
                    <strong>Marketing Preferences:</strong> Your preferences in receiving marketing communications from
                    us.
                  </li>
                </ul>
              </section>

              <Separator />

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Process and manage your bookings</li>
                  <li>Create and maintain your account</li>
                  <li>Provide customer support</li>
                  <li>Send administrative information, such as booking confirmations and updates</li>
                  <li>Send marketing communications (if you have opted in)</li>
                  <li>Improve our Services</li>
                  <li>Protect against fraudulent or unauthorized transactions</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <Separator />

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">3. Information Sharing</h2>
                <p>We may share your personal information with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Service Providers:</strong> Third parties that perform services on our behalf, such as
                    payment processing, data analysis, email delivery, and customer service.
                  </li>
                  <li>
                    <strong>Travel Partners:</strong> Hotels, airlines, local guides, and other travel service providers
                    necessary to complete your booking.
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> When required by law or to protect our rights, property, or
                    safety, or the rights, property, or safety of others.
                  </li>
                </ul>
                <p>
                  We do not sell your personal information to third parties for their marketing purposes without your
                  explicit consent.
                </p>
              </section>

              <Separator />

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">4. Cookies and Tracking</h2>
                <p>
                  We use cookies and similar tracking technologies to track activity on our Services and hold certain
                  information. Cookies are files with a small amount of data which may include an anonymous unique
                  identifier.
                </p>
                <p>
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                  However, if you do not accept cookies, you may not be able to use some portions of our Services.
                </p>
              </section>

              <Separator />

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">5. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect the security of your
                  personal information. However, please be aware that no method of transmission over the Internet or
                  method of electronic storage is 100% secure.
                </p>
                <p>
                  While we strive to use commercially acceptable means to protect your personal information, we cannot
                  guarantee its absolute security.
                </p>
              </section>

              <Separator />

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">6. Your Rights</h2>
                <p>Depending on your location, you may have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Correct inaccurate personal information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to processing of your personal information</li>
                  <li>Request restriction of processing your personal information</li>
                  <li>Request transfer of your personal information</li>
                  <li>Withdraw consent</li>
                </ul>
                <p>
                  To exercise any of these rights, please contact us using the information provided in the "Contact
                  Information" section.
                </p>
              </section>

              <Separator />

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">7. Children's Privacy</h2>
                <p>
                  Our Services are not intended for children under the age of 18. We do not knowingly collect personal
                  information from children under 18. If you are a parent or guardian and you are aware that your child
                  has provided us with personal information, please contact us.
                </p>
              </section>

              <Separator />

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">8. International Data Transfers</h2>
                <p>
                  Your information may be transferred to — and maintained on — computers located outside of your state,
                  province, country, or other governmental jurisdiction where the data protection laws may differ from
                  those in your jurisdiction.
                </p>
                <p>
                  If you are located outside the United States and choose to provide information to us, please note that
                  we transfer the data to the United States and process it there. Your consent to this Privacy Policy
                  followed by your submission of such information represents your agreement to that transfer.
                </p>
              </section>

              <Separator />

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">9. Changes to Privacy Policy</h2>
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page and updating the "Last updated" date at the top of this page.
                </p>
                <p>
                  You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy
                  Policy are effective when they are posted on this page.
                </p>
              </section>

              <Separator />

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">10. Contact Information</h2>
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>By email: privacy@compassadventures.com</li>
                  <li>By phone: 1-800-COMPASS</li>
                  <li>By mail: 123 Adventure Way, Explorer City, CA 90210, United States</li>
                </ul>
              </section>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
