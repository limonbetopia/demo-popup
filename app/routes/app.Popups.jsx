function Popups() {
  return (
    <>
      <s-page heading="Demo popup">
        <Top></Top>
        <PopupAraEmty></PopupAraEmty>
        <Modal></Modal>
      </s-page>
    </>
  );
}

export default Popups;

// 1 section top section

function Top() {
  return (
    <s-stack
      direction="inline"
      justifyContent="space-between"
      alignItems="center"
    >
      <s-heading>
        <h2>Popups</h2>
      </s-heading>
      <s-stack>
        <s-button variant="primary">Create popup</s-button>
      </s-stack>
    </s-stack>
  );
}

// 2 section for emty popup

function PopupAraEmty() {
  return (
    <s-section>
      <s-stack justifyContent="center" alignItems="center" padding="base">
        <s-box inlineSize="200px">
          <s-image
            src="https://cdn.shopify.com/s/files/1/0811/1013/9101/files/Frame_65.png?v=1771925407"
            alt="Four pixelated characters ready to build amazing Shopify apps"
            aspectRatio="59/161"
            inlineSize="auto"
            sizes="small"
          />
        </s-box>

        <s-stack alignItems="center" gap="small">
          <s-box inlineSize="400px">
            <s-stack justifyContent="center" alignItems="center" gap="large">
              <s-heading>Create your first popup</s-heading>
              <s-paragraph>
                Grow your email list and increase conversions with customizable
                popups. Start converting visitors into loyal customers today.
              </s-paragraph>
              <s-button variant="primary">Create popup</s-button>
            </s-stack>
          </s-box>
        </s-stack>
      </s-stack>
    </s-section>
  );
}

// for app statuss modal

function Modal() {
  return (
    <s-banner
      heading="127 products missing shipping weights"
      tone="warning"
      dismissible
    >
      Products without weights may show inaccurate shipping rates, leading to
      checkout abandonment.
      <s-button
        slot="secondary-actions"
        variant="secondary"
        href="/admin/products?filter=missing-weights"
      >
        Review products
      </s-button>
      <s-button
        slot="secondary-actions"
        variant="secondary"
        href="javascript:void(0)"
      >
        Setup guide
      </s-button>
    </s-banner>
  );
}
