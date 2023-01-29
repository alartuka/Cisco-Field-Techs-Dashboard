import React, { useState, useEffect } from 'react'

const PacketLatency = () => {
  const [packetLatency, setPacketLatency] = useState(null);

  useEffect(() => {
      const ws = new WebSocket('ws://localhost:55455');

      ws.onopen = () => {
          console.log('connected to ws server');
      };

      ws.onmessage = (event) => {
          const packetTimestamp = parseInt(event.data);
          const currentTime = new Date().getTime();
          const latency = currentTime - packetTimestamp;
          setPacketLatency(latency);
      };

      return () => {
          ws.close();
      };
  }, []);

  return (
      <div>
          {packetLatency !== null ? (
              <p>Packet Latency: {packetLatency}ms</p>
          ) : (
              <p>Loading...</p>
          )}
      </div>
  );
};

export default PacketLatency;