import {
   Heading,
   ListItem,
   Text,
   UnorderedList,
   VStack,
} from "@chakra-ui/react";

function ExtraContent() {
   return (
      <VStack pt={2} align={"stretch"}>
         <ContentHeader>
            Welcome to Medimed.com! India's Leading Online Pharmacy!
         </ContentHeader>
         <ContentDescription>
            With a dynamic legacy of over 100 years in the pharma business, it
            comes as no surprise that Medimed.com is the first choice of over 4
            million+ satisfied customers when it comes to an online pharmacy in
            India. Medimed.com has a pan India presence as we deliver health
            care essentials to every state in the country. We take your health
            seriously at Medimed.com. Be it purchasing medicines online, lab
            tests or online doctor consultations, we've got it all covered for
            our customers!
         </ContentDescription>
         <ContentHeader>
            Take the Worry Out of Buying Medicines! Purchase Medicines Online
            Anytime, Anywhere!
         </ContentHeader>
         <ContentDescription>
            Get everything you need at Medimed.com to take care of your health
            right from high-quality, affordable, authentic prescription
            medicines, Over-The-Counter pharmaceuticals products to general
            health care products, Ayurveda, Unani and Homeopathy medicines.
         </ContentDescription>
         <ContentDescription>
            Buy medicines online at Medimed.com from the comfort of your home
            and we will take care of the rest! We will ensure that the
            life-saving drugs reach your doorstep without a hitch. Do away with
            the hassle of driving to the medical store, waiting in line, or even
            remembering your refills! Netmed.com will sort out those problems
            for you effectively so that you can lead a healthy and full life!
         </ContentDescription>
         <ContentDescription>
            Ordering medicines online at Medimed.com is just a simple 4 step
            process. Browse through our wide range of health care products, add
            them to your cart, uploading your prescription (if required) and
            proceed to checkout!
         </ContentDescription>
         <ContentDescription>
            With Netmed.com, rest assured that your health will be in safe
            hands!
         </ContentDescription>
         <ContentHeader>Buying medicines online</ContentHeader>
         <ContentDescription>
            At Medimed.com, we ensure that you get high-quality life-saving
            medicines are delivered to you on time. Order medicines online at
            your convenience from across the country. We also deliver Ayurvedic,
            Homeopathic, Unani and Over-The-Counter (OTC) products to over
            19,000 pin codes across the country!
         </ContentDescription>
         <ContentHeader>Medicine Subscription</ContentHeader>
         <ContentDescription>
            Remembering to refilling medicines month on month to address chronic
            conditions can be a hassle. Medimed' subscription service will
            ensure that you never run out of these vital medicines. Just set it
            up and your medicines will get refilled and delivered automatically
            every month to your doorstep!
         </ContentDescription>
         <ContentHeader>Medimed First</ContentHeader>
         <ContentDescription>
            Medimed First is our loyalty programme which puts you and your
            health First! First members can get an extra 2.5% NMS Cashback (up
            to INR 100 per order) on prescription medication ordered using the
            membership. Members are also eligible for free delivery, priority
            processing, and free online doctor consultations!
         </ContentDescription>
         <ContentHeader>Diagnostics</ContentHeader>
         <ContentDescription>
            Do you find yourself constantly putting off getting your lab tests
            done because it's inconvenient to schedule them or because they are
            expensive? Visit Netmed.com to book lab tests and health checkup
            packages online from well-reputed, certified diagnostic labs
            according to your convenience and at affordable rates. We will also
            make your lab reports available online for easy access.
         </ContentDescription>
         <ContentHeader>Online Doctor Consultation</ContentHeader>
         <ContentDescription>
            Are the long queues at hospitals and clinics putting you off? At
            Medimed.com, we realize that your time and health are precious.
            Consult with top-notch doctors online 24/7 at your convenience
            through our online doctor consultation service!
         </ContentDescription>
         <ContentHeader>Why Choose Medimed?</ContentHeader>
         <UnorderedList
            pl={10}
            align={"left"}
            fontSize={"sm"}
            color={"blackAlpha.700"}
         >
            <ListItem>100+ years of experience in the pharma sector</ListItem>
            <ListItem>Vital medicines delivered across the country</ListItem>
            <ListItem>Trust of more than 4 million+ loyal customers</ListItem>
            <ListItem>
               Our team is made up of highly experienced pharmacists &
               healthcare professionals
            </ListItem>
            <ListItem>
               A wide array of healthcare services available for your
               convenience
            </ListItem>
            <ListItem>
               We stock only genuine medicines & healthcare products
            </ListItem>
         </UnorderedList>
         <ContentHeader>Our Awards and Recognition</ContentHeader>
         <ContentDescription>
            We at Medimed.com know how crucial medicine is to treating health
            conditions and we are extremely proud to be at the forefront of the
            online medicine industry. Medimed.com offers its customers a
            reliable online pharmacy service and as a testament to our
            commitment, we are regularly recognized and honoured with awards. We
            are pleased to highlight some of our awards here and we aim to
            continue adding more feathers to our cap!
         </ContentDescription>
         <ContentDescription>
            We have bagged the 'Health Tech Start-Up of the Year' at the NDTV
            Unicorn Awards 2016. We are also proud that we have been selected as
            Asia's Most Promising Brand 2018' by Int+ WCRC International.
         </ContentDescription>
         <ContentDescription>
            We have been named as the 'Best Digital Healthcare Start-up' by ET
            Now World Health and Wellness Congress in 2019. We were also
            recognized by ET Now World Health and Wellness Congress as the
            'Digital Healthcare Company of the year' in 2019.
         </ContentDescription>
      </VStack>
   );
}

export default ExtraContent;

function ContentHeader({ children }) {
   return (
      <Heading
         align={"left"}
         fontSize={"md"}
         lineHeight={2}
         color={"blackAlpha.800"}
      >
         {children}
      </Heading>
   );
}

function ContentDescription({ children }) {
   return (
      <Text align={"left"} fontSize={"sm"} color={"blackAlpha.700"}>
         {children}
      </Text>
   );
}
