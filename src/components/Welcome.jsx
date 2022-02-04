import { Card, Timeline, Typography } from "antd";
import React, { useMemo } from "react";
import { useMoralis } from "react-moralis";

const { Text } = Typography;

const styles = {
  title: {
    fontSize: "20px",
    fontWeight: "700",
  },
  text: {
    fontSize: "16px",
  },
  card: {
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    border: "1px solid #e7eaf3",
    borderRadius: "0.5rem",
  },
  timeline: {
    marginBottom: "-45px",
  },
};
// eslint-disable-next-line no-unused-vars
export default function Welcome({ isServerInfo }) {
  const { Moralis } = useMoralis();
  // eslint-disable-next-line no-unused-vars
  const isInchDex = useMemo(
    () => (Moralis.Plugins?.oneInch ? true : false),
    [Moralis.Plugins?.oneInch],
  );

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Card
        style={styles.card}
        title={
          <>
            📝 <Text strong>Welcome</Text>
          </>
        }
      >
        <img
          src="https://raleighblockchain.net/wp-content/uploads/2022/01/master-logo-1.png"
          alt="logo"
        />
        <text style={{ color: "gray" }}>Welcome to the </text>
        <text style={{ color: "red" }}>1NCBLOCKCHAIN</text>
        <text style={{ color: "gray" }}>cross-chain protocol.</text>
        <text style={{ color: "gray" }}>
          Here you will be able to securely <br />
          buy, sell and exchange digital assets.
          <br /> **
          <br />
          <br />
        </text>
        <text style={{ color: "gray", fontWeight: "bold" }}>
          👛 WALLET:
        </text>{" "}
        <text style={{ color: "gray" }}>
          Send assets to another account. <br />
        </text>{" "}
        <br />
        <text style={{ color: "gray", fontWeight: "bold" }}>🏦 DEX:</text>{" "}
        <text style={{ color: "gray" }}>
          Swap assets across multiple chains. <br />
        </text>{" "}
        <br />
        <text style={{ color: "gray", fontWeight: "bold" }}>💵 FIAT:</text>{" "}
        <text style={{ color: "gray" }}>
          Connect your bank to your wallet. <br />
        </text>{" "}
        <br />
        <text style={{ color: "gray", fontWeight: "bold" }}>
          💰 BALANCES:
        </text>{" "}
        <text style={{ color: "gray" }}>
          Check your account balances. <br />
        </text>{" "}
        <br />
        <text style={{ color: "gray", fontWeight: "bold" }}>🖼️ NFTS:</text>{" "}
        <text style={{ color: "gray" }}>
          View your NFT holdings across multiple chains. <br />
        </text>{" "}
        <br />
        <text style={{ color: "gray", fontWeight: "bold" }}>
          📄 CONTRACT:
        </text>{" "}
        <text style={{ color: "gray" }}>
          Interact with smart contracts directly from your wallet. <br />
        </text>{" "}
        <br />
      </Card>
      <div>
        <Card
          style={styles.card}
          title={
            <>
              💣 <Text strong>Project Roadmap</Text>
            </>
          }
        >
          <Timeline mode="left" style={styles.timeline}>
            <Timeline.Item dot="⚙️">
              <Text style={styles.text}>
                Plan UI/UX for NFT Marketplace for users to :
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://1ncblockchain.com"
                >
                  Inspect,
                </a>{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://1ncblockchain.com"
                >
                  Develop
                </a>{" "}
                and{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://1ncblockchain.com"
                >
                  Mint
                </a>{" "}
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="⚙️">
              <Text style={styles.text}>
                Begin deployment of 6 unified <Text code>.net</Text> help
                terminals.
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="📡">
              <Text style={styles.text}>
                Research contracts for sustainable <Text code>DAO</Text>{" "}
                governance.
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="✅" style={styles.text}>
              <Text>
                Successful launch of the 🐦<Text strong> 1NCBLOCKCHAIN</Text>{" "}
                network
              </Text>
            </Timeline.Item>
          </Timeline>
        </Card>
        <Card
          style={{ marginTop: "10px", ...styles.card }}
          title={
            <>
              📡 <Text strong> Blockchain Announcements</Text>
            </>
          }
        >
          <Timeline mode="left" style={styles.timeline}>
            <Timeline.Item dot="😎">
              <Text style={styles.text}>
                The{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://1ncblockchain.com/"
                >
                  developer
                </a>{" "}
                portal is now open, launch your <Text code>project</Text> on the
                blockchain.
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="🦊">
              <Text style={styles.text}>
                Connect to your account with <Text code>metamask</Text>
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="🔒">
              <Text style={styles.text}>
                Learn more about securing your account at the{" "}
                <Text code>learning center</Text>
              </Text>
            </Timeline.Item>
          </Timeline>
        </Card>
      </div>
    </div>
  );
}
