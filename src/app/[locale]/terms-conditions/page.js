import PrivacyPolicyContent from "@/components/features/privacyPolicy/PrivacyPolicyContent";

const local_data = {
  title: "Privacy Policy",
  content: `
    <p>Arabian Car Marketing Co LLC — Authorized Distributor of Ford in Oman</p>

    <p>
      This website is operated by Arabian Car Marketing Co LLC (Authorized distributor of Ford in Oman)
      in association with Ford Middle East ("Ford"). Access to this site is subject to the terms and
      conditions of use outlined below.
    </p>

      <h5>Disclaimer</h5>
      <p>
        Every effort has been made to ensure that the information on this site is correct and up to date.
        However, Ford Oman (Arabian Car Marketing Co LLC) and Ford do not provide any warranty as to the
        completeness or accuracy of the information and, subject to applicable laws, does not accept any
        liability for damages of any kind resulting from the access or use of this site and its contents.
      </p>
      <p>
        Ford reserves the right to discontinue or change any of the models, prices, colours, materials,
        equipment or other specifications referred to on this site at any time without notice. Some of
        the equipment shown or referred to in this site may only be available as an option at extra cost.
        Always contact us for the latest information about a Ford product, and its availability, before
        placing an order.
      </p>

      <h5>Copyright</h5>
      <p>
        All information on this site is protected by copyright and other intellectual property rights.
        No images, text or other content from this site may be distributed or reproduced without prior
        written approval.
      </p>

      <h5>External Links</h5>
      <p>
        This document describes our policy regarding information received about you during visits to our
        web sites. The amount and type of information received depends on how you use our sites. This
        website contains links to other sites operated by third parties other than Ford. Ford Oman and
        Ford are not responsible for the privacy practices or the content of such web sites. The inclusion
        of links does not imply any endorsement of the material on those Web sites or any association with
        their operators. This privacy statement is for this web site only. We encourage you to read the
        privacy statements of each website that collects your personally identifiable information.
      </p>

      <h5>Changes To These Terms</h5>
      <p>
        This document describes our policy regarding information received about you during visits to our
        web sites. The amount and type of information received depends on how you use our sites. This
        website contains links to other sites operated by third parties other than Ford. Ford Oman and
        Ford are not responsible for the privacy practices or the content of such web sites. The inclusion
        of links does not imply any endorsement of the material on those Web sites or any association with
        their operators. This privacy statement is for this web site only. We encourage you to read the
        privacy statements of each website that collects your personally identifiable information.
      </p>

 `,
};

export default function page({ data = local_data }) {
  return (
    <>
      <PrivacyPolicyContent data={data} />
    </>
  );
}
