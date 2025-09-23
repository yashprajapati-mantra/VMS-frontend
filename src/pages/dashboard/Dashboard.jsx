// src/pages/dashboard/Dashboard.jsx
import React from "react";
import { Card, Row, Col, Typography, Avatar } from "antd";
import { PictureOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

/**
 * KPI Card - matches the visual from screenshot:
 * - label top-left
 * - big numeric value with small red "[text]" to the right
 * - small circle icon on the right (Picture icon)
 */
const KpiCard = ({ label, value }) => {
    return (
        <Card
            className="rounded-lg shadow-sm"
            style={{ padding: 16 }}
        >
            <div className="flex justify-between items-start">
                <div>
                    <Text className="text-sm text-gray-600">{label}</Text>
                    <div className="flex items-center gap-3 mt-2">
                        <Title level={2} className="!m-0 !text-4xl !text-indigo-700">
                            {value}
                        </Title>
                        <Text className="text-sm text-pink-600">[text]</Text>
                    </div>
                </div>

                {/* round icon to the right as in screenshot */}
                <div>
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                        <Avatar
                            size={28}
                            shape="circle"
                            style={{ background: "transparent", boxShadow: "none" }}
                            icon={<PictureOutlined />}
                        />
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default function Dashboard() {
    return (
        <div className="min-h-screen">
            {/* Container to emulate white dashboard panel area */}
            <div className="bg-white rounded-md p-4">
                {/* Greeting */}
                <div className="mb-6">
                    <Title level={3} className="!mb-0">
                        Welcome Back, John!
                    </Title>
                </div>

                {/* Top KPIs */}
                <Row gutter={[16, 16]} className="mb-6">
                    <Col xs={24} sm={12} md={6}>
                        <KpiCard label="Active camera" value="100" />
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <KpiCard label="Recording Status" value="100" />
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <KpiCard label="Active alerts" value="100" />
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <KpiCard label="System uptime" value="100" />
                    </Col>
                </Row>

                {/* Main content: left camera feed + right status/alerts */}
                <Row gutter={[16, 16]}>
                    {/* Left: Camera Feed (big card with 2x2 placeholders) */}
                    <Col xs={24} lg={16}>
                        <Card
                            title={<span className="text-sm font-medium">Camera Feed</span>}
                            style={{ padding: 18 }}
                            className="rounded-lg"
                        >
                            <Row gutter={[16, 16]}>
                                {[1, 2, 3, 4].map((i) => (
                                    <Col xs={24} sm={12} key={i}>
                                        <div className="bg-gray-100 rounded-md h-36 md:h-40 w-full flex items-center justify-center">
                                            {/* placeholder content - replace with actual video/canvas */}
                                            <PictureOutlined className="text-4xl text-gray-300" />
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Card>
                    </Col>

                    {/* Right: System status + Alerts stacked */}
                    <Col xs={24} lg={8} className="flex flex-col gap-4">
                        <Card
                            title={<span className="text-sm font-medium">System status</span>}
                            style={{ minHeight: 160, marginBottom: 16 }}
                            className="rounded-lg flex-1"
                        >
                            <Text type="secondary"> </Text>
                        </Card>

                        <Card
                            title={<span className="text-sm font-medium">Alerts</span>}

                            style={{ minHeight: 120, marginBottom: 16 }}
                            className="rounded-lg"
                        >
                            <Text type="secondary"> </Text>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
