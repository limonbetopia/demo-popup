import frame70 from "../images/Frame70.png";

function Popups() {
  return (
    <>
      <s-page heading="Demo popup">
        <Top></Top>
        <PopupAraEmty></PopupAraEmty>
        <Modal></Modal>
        <Filter></Filter>
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
    <s-banner heading="App embed is not enabled" tone="warning" dismissible>
      <s-box inlineSize="400px">
        To display your published popups, the app embed needs to be enabled.
        Please enable it to show popups on your storefront.
      </s-box>

      <s-button slot="secondary-actions" variant="secondary">
        Enable now
      </s-button>
    </s-banner>
  );
}

// for popup filter

function Filter() {
  return (
    <>
      <s-stack>
        <s-stack direction="inline" justifyContent="space-between">
          <>
            <s-button
              commandFor="customer-menu"
              variant="primary"
              alignItems="center"
            >
              <s-icon type="note"></s-icon>
              All popups
            </s-button>

            <s-menu id="customer-menu" accessibilityLabel="Customer actions">
              <s-button tone="neutral">Active</s-button>
              <s-button tone="critical">Draft</s-button>
            </s-menu>
          </>

          <>
            <s-button commandFor="customer-menu2" variant="primary">
              <s-icon type="sort"></s-icon>
              Sort by: Last edited
            </s-button>

            <s-menu id="customer-menu2" accessibilityLabel="Customer actions">
              <s-button>Last edited</s-button>
              <s-button>Created</s-button>
              <s-button>Updated</s-button>
            </s-menu>
          </>
        </s-stack>
      </s-stack>
      <br />
      <s-section padding="none">
        <s-table>
          <s-table-header-row>
            <s-table-header>Popup name</s-table-header>
            <s-table-header>Active</s-table-header>
            <s-table-header>Views</s-table-header>
            <s-table-header>Subscriber</s-table-header>
            <s-table-header>Conversion</s-table-header>
            <s-table-header></s-table-header>
          </s-table-header-row>

          <s-table-body>
            <s-table-row>
              <s-table-cell>
                <s-stack>
                  <s-image src={frame70} alt={frame70} />
                </s-stack>
              </s-table-cell>
              <s-table-cell>john@example.com</s-table-cell>
              <s-table-cell>23</s-table-cell>
              <s-table-cell>123-456-7890</s-table-cell>
            </s-table-row>
          </s-table-body>
        </s-table>
      </s-section>
    </>
  );
}
