// for cart
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
// for cart

function Index() {
  return (
    <>
      <s-page heading="Products">
        <Top></Top>
        <QuickSetup></QuickSetup>
        <AppStatus></AppStatus>
        <ConversionRate></ConversionRate>
        <PerformanceOverview></PerformanceOverview>
        <CustomChart></CustomChart>
        <PopupList></PopupList>
      </s-page>
    </>
  );
}
export default Index;

// for 1st sectoin

function Top() {
  return (
    <s-stack
      direction="inline"
      justifyContent="space-between"
      alignItems="center"
    >
      <s-heading>
        <h2 style={{ fontWeight: "600" }}>Hey, demo! Great to see you!</h2>
      </s-heading>
      <s-button variant="primary">Create popup</s-button>
    </s-stack>
  );
}

// for 2nd section

function QuickSetup() {
  return (
    <s-section>
      <s-stack direction="inline" justifyContent="space-between">
        <s-heading>Quick setup guide</s-heading>
        <s-paragraph>
          <s-text>0 of 3 completed</s-text>
        </s-paragraph>
      </s-stack>
      <s-stack>
        <div
          style={{
            height: "4px",
            borderRadius: "50px",
            background: "#ebebeb",
            marginTop: "16px",
            marginBottom: "16px",
          }}
          className="line"
        ></div>
      </s-stack>

      <s-stack
        accessibilityLabel="for enable step"
        background="strong"
        padding="base"
        borderRadius="base"
      >
        <s-stack direction="inline" gap="small-100">
          <s-icon type="layout-block" />
          <s-heading>Enable app embed</s-heading>
        </s-stack>

        <s-stack padding="small none none large">
          <s-paragraph color="subdued">
            Allow the app to display popups on your storefront
          </s-paragraph>
          <s-stack padding="small none none">
            <s-button variant="primary">Enable</s-button>
          </s-stack>
        </s-stack>
      </s-stack>
      {/* for created pop  */}
      <s-stack accessibilityLabel="created pop up" padding="base">
        <s-stack direction="inline" gap="small-100">
          <s-icon type="layout-block" />
          <s-heading>Create your first popup</s-heading>
        </s-stack>
        <s-stack padding="small none none large">
          <s-paragraph color="subdued">
            Allow the app to display popups on your storefront
          </s-paragraph>
          <s-stack padding="small none none" display="none">
            <s-button variant="secondary">Enable</s-button>
          </s-stack>
        </s-stack>
      </s-stack>

      {/* for publish popup  */}

      <s-stack accessibilityLabel="for publish">
        <s-stack accessibilityLabel="created pop up" padding="base">
          <s-stack direction="inline" gap="small-100">
            <s-icon type="layout-block" />
            <s-heading>Publish popup</s-heading>
          </s-stack>
          <s-stack padding="small none none large">
            <s-paragraph color="subdued">
              Launch popup and start collecting emails
            </s-paragraph>
            <s-stack padding="small none none" display="none">
              <s-button variant="secondary">Enable</s-button>
            </s-stack>
          </s-stack>
        </s-stack>
      </s-stack>
    </s-section>
  );
}

// added new section name is App embed status

// for 3rd section

function AppStatus() {
  return (
    <s-section>
      <s-stack
        direction="inline"
        justifyContent="space-between"
        alignItems="center"
      >
        <s-stack>
          <s-stack
            direction="inline"
            gap="small"
            padding="none none small none"
          >
            <s-heading>App embed status</s-heading>
            <s-badge tone="warning">Setup required</s-badge>
          </s-stack>

          <s-paragraph>
            Allow the app to display popups on your storefront
          </s-paragraph>
        </s-stack>
        <s-stack>
          <s-button type="button" variant="primary">
            Enable now
          </s-button>
        </s-stack>
      </s-stack>
    </s-section>
  );
}

// for 3rd section
function ConversionRate() {
  return (
    <s-stack>
      <s-grid
        gridTemplateColumns="repeat(4, 1fr)"
        gap="small"
        justifyContent="center"
      >
        {/* view  */}
        <s-grid-item
          gridColumn="span 1"
          border="base"
          padding="base"
          background="base"
          borderRadius="large"
        >
          <s-stack direction="inline" justifyContent="space-between">
            <s-paragraph>
              <s-text>Popup Views</s-text>
            </s-paragraph>
            <s-icon type="eye-check-mark"></s-icon>
          </s-stack>
          <s-stack padding="base none none">
            <s-heading>0</s-heading>
          </s-stack>
        </s-grid-item>

        {/* subcriber  */}
        <s-grid-item
          gridColumn="span 1"
          border="base"
          padding="base"
          background="base"
          borderRadius="large"
        >
          <s-stack direction="inline" justifyContent="space-between">
            <s-paragraph>
              <s-text>Subscribers Collected</s-text>
            </s-paragraph>
            <s-icon type="team"></s-icon>
          </s-stack>
          <s-stack padding="base none none">
            <s-heading>0</s-heading>
          </s-stack>
        </s-grid-item>

        {/* conversion  */}
        <s-grid-item
          gridColumn="span 1"
          border="base"
          padding="base"
          background="base"
          borderRadius="large"
        >
          <s-stack direction="inline" justifyContent="space-between">
            <s-paragraph>
              <s-text>Conversion Rate</s-text>
            </s-paragraph>
            <s-icon type="rocket"></s-icon>
          </s-stack>
          <s-stack padding="base none none">
            <s-heading>0%</s-heading>
          </s-stack>
        </s-grid-item>

        {/* active  */}
        <s-grid-item
          gridColumn="span 1"
          border="base"
          padding="base"
          background="base"
          borderRadius="large"
        >
          <s-stack direction="inline" justifyContent="space-between">
            <s-paragraph>
              <s-text>Active Popups</s-text>
            </s-paragraph>
            <s-icon type="note"></s-icon>
          </s-stack>
          <s-stack padding="base none none">
            <s-heading>0</s-heading>
          </s-stack>
        </s-grid-item>

        {/* card end  */}
      </s-grid>
    </s-stack>
  );
}

// for Performance Overview section

function PerformanceOverview() {
  return (
    <s-stack padding="base none none none">
      <s-stack
        padding="base"
        background="base"
        borderRadius="base base none none"
      >
        <s-stack
          direction="inline"
          justifyContent="space-between"
          alignItems="center"
          borderRadius="base base none none"
        >
          <s-stack>
            <s-heading>Performance Overview</s-heading>
          </s-stack>
          <s-stack>
            <s-button variant="secondary" icon="chart-vertical">
              Total views
            </s-button>
          </s-stack>
        </s-stack>
        <s-stack>
          <div
            style={{
              height: "4px",
              borderRadius: "50px",
              background: "#ebebeb",
              marginTop: "16px",
              marginBottom: "16px",
            }}
            className="line"
          ></div>
        </s-stack>
      </s-stack>
    </s-stack>
  );
}

// for chart section

const data = [
  { date: "Feb 04", value: 5 },
  { date: "Feb 05", value: 0 },
  { date: "Feb 06", value: 0 },
  { date: "Feb 07", value: 500 },
  { date: "Feb 08", value: 0 },
  { date: "Feb 09", value: 10 },
  { date: "Feb 10", value: 0 },
  { date: "Feb 11", value: 0 },
  { date: "Feb 12", value: 0 },
  { date: "Feb 13", value: 0 },
];

function CustomChart() {
  return (
    <s-stack
      overflow="hidden"
      background="base"
      borderRadius="none none base base"
    >
      <div
        style={{
          width: "100%",
          height: 350,

          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#dcdcdc"
            />
            <XAxis
              dataKey="date"
              tick={{ fill: "#666", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              domain={[0, 600]}
              ticks={[0, 150, 300, 450, 600]}
              tick={{ fill: "#666", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="transparent"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </s-stack>
  );
}
// for popup list

function PopupList() {
  return (
    <s-stack padding="base none none">
      <s-section>
        <s-stack direction="inline" justifyContent="space-between">
          <s-heading>Recent popup</s-heading>
          <s-link href="#">View all popups</s-link>
        </s-stack>

        <s-stack padding="base none">
          <s-table>
            <s-table-header-row>
              <s-table-header listSlot="name">Name</s-table-header>
              <s-table-header>Status</s-table-header>
              <s-table-header>Views</s-table-header>
              <s-table-header>Conversion</s-table-header>
              <s-table-header>Last edited</s-table-header>
              <s-table-header></s-table-header>
            </s-table-header-row>
            <s-table-body>
              {/* table row  */}
              <s-table-row>
                <s-table-cell>
                  <s-text>Summer Sale Popup</s-text>
                </s-table-cell>

                <s-table-cell>
                  <s-badge tone="success">Active</s-badge>
                </s-table-cell>
                <s-table-cell>
                  <s-text>4,521</s-text>
                </s-table-cell>
                <s-table-cell>
                  <s-text>12.3%</s-text>
                </s-table-cell>

                <s-table-cell>
                  <s-text>2 hours ago</s-text>
                </s-table-cell>

                <s-table-cell>
                  <>
                    <s-button
                      commandFor="product-options-popover"
                      icon="menu-horizontal"
                    ></s-button>

                    <s-popover id="product-options-popover">
                      <s-stack direction="block">
                        <s-button variant="tertiary">Edit</s-button>
                        <s-button variant="tertiary">Rename</s-button>
                        <s-button variant="tertiary">Duplicate</s-button>
                        <s-button variant="tertiary" tone="critical">
                          Delete
                        </s-button>
                      </s-stack>
                    </s-popover>
                  </>
                </s-table-cell>
              </s-table-row>
              {/* table row  */}

              {/* table row1  */}
              <s-table-row>
                <s-table-cell>
                  <s-text>Welcome Discount 10%</s-text>
                </s-table-cell>

                <s-table-cell>
                  <s-badge>Draft</s-badge>
                </s-table-cell>
                <s-table-cell>
                  <s-text>3,812</s-text>
                </s-table-cell>
                <s-table-cell>
                  <s-text>9.8%</s-text>
                </s-table-cell>

                <s-table-cell>
                  <s-text>1 day ago</s-text>
                </s-table-cell>

                <s-table-cell>
                  <>
                    <s-button
                      commandFor="product-options-popover"
                      icon="menu-horizontal"
                    ></s-button>

                    <s-popover id="product-options-popover">
                      <s-stack direction="block">
                        <s-button variant="tertiary">Edit</s-button>
                        <s-button variant="tertiary">Rename</s-button>
                        <s-button variant="tertiary">Duplicate</s-button>
                        <s-button variant="tertiary" tone="critical">
                          Delete
                        </s-button>
                      </s-stack>
                    </s-popover>
                  </>
                </s-table-cell>
              </s-table-row>
              {/* table row  */}

              {/* table row1  */}
              <s-table-row>
                <s-table-cell>
                  <s-text>Exit Intent Offer</s-text>
                </s-table-cell>

                <s-table-cell>
                  <s-badge>Draft</s-badge>
                </s-table-cell>
                <s-table-cell>
                  <s-text>2,890</s-text>
                </s-table-cell>
                <s-table-cell>
                  <s-text>11.3%</s-text>
                </s-table-cell>

                <s-table-cell>
                  <s-text>3 days ago</s-text>
                </s-table-cell>

                <s-table-cell>
                  <>
                    <s-button
                      commandFor="product-options-popover"
                      icon="menu-horizontal"
                    ></s-button>

                    <s-popover id="product-options-popover">
                      <s-stack direction="block">
                        <s-button variant="tertiary">Edit</s-button>
                        <s-button variant="tertiary">Rename</s-button>
                        <s-button variant="tertiary">Duplicate</s-button>
                        <s-button variant="tertiary" tone="critical">
                          Delete
                        </s-button>
                      </s-stack>
                    </s-popover>
                  </>
                </s-table-cell>
              </s-table-row>
              {/* table row  */}

              {/* table row4  */}
              <s-table-row>
                <s-table-cell>
                  <s-text>Newsletter Signup</s-text>
                </s-table-cell>

                <s-table-cell>
                  <s-badge tone="success">Active</s-badge>
                </s-table-cell>
                <s-table-cell>
                  <s-text>1,521</s-text>
                </s-table-cell>
                <s-table-cell>
                  <s-text>19.6%</s-text>
                </s-table-cell>

                <s-table-cell>
                  <s-text>1 week ago</s-text>
                </s-table-cell>

                <s-table-cell>
                  <>
                    <s-button
                      commandFor="product-options-popover"
                      icon="menu-horizontal"
                    ></s-button>

                    <s-popover id="product-options-popover">
                      <s-stack direction="block">
                        <s-button variant="tertiary">Edit</s-button>
                        <s-button variant="tertiary">Rename</s-button>
                        <s-button variant="tertiary">Duplicate</s-button>
                        <s-button variant="tertiary" tone="critical">
                          Delete
                        </s-button>
                      </s-stack>
                    </s-popover>
                  </>
                </s-table-cell>
              </s-table-row>
              {/* table row  */}
            </s-table-body>
          </s-table>
        </s-stack>
      </s-section>
    </s-stack>
  );
}
