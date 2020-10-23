import React from "react";
import { Modal, Form, Input, Button, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

import { RowEntry } from "./data";

export default function ({
  visible,
  closeModal,
  data,
  updateCallback,
}: {
  visible: boolean;
  closeModal: () => void;
  data: RowEntry;
  updateCallback: Function;
}) {
  const onFinish = (values: any) => {
    if (values.newhours) {
      values.hours.push(...values.newhours);
    }
    updateCallback(values.hours);
    closeModal();
  };

  const hours = data.hours;

  const form = (
    <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
      {hours.map((elem, index) => (
        <Space
          key={index}
          style={{ display: "flex", marginBottom: 8 }}
          align="baseline"
        >
          <Form.Item
            name={["hours", index, "open"]}
            rules={[{ required: true, message: "Missing opening time" }]}
            initialValue={elem.open}
          >
            <Input placeholder="Opening time" />
          </Form.Item>
          <Form.Item
            name={["hours", index, "close"]}
            rules={[{ required: true, message: "Missing closing time" }]}
            initialValue={elem.close}
          >
            <Input placeholder="Closing time" />
          </Form.Item>
          {/* <MinusCircleOutlined onClick={() => remove(field.name)} /> */}
        </Space>
      ))}

      <Form.List name="newhours">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field) => (
              <Space
                key={field.key}
                style={{ display: "flex", marginBottom: 8 }}
                align="baseline"
              >
                <Form.Item
                  {...field}
                  name={[field.name, "open"]}
                  fieldKey={[field.fieldKey, "open"]}
                  rules={[{ required: true, message: "Missing opening time" }]}
                >
                  <Input placeholder="Opening time" />
                </Form.Item>
                <Form.Item
                  {...field}
                  name={[field.name, "close"]}
                  fieldKey={[field.fieldKey, "close"]}
                  rules={[{ required: true, message: "Missing closing time" }]}
                >
                  <Input placeholder="Closing time" />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(field.name)} />
              </Space>
            ))}
            <Form.Item>
              <Button onClick={() => add()} block icon={<PlusOutlined />}>
                Add Hours
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );

  return (
    <Modal
      title={`Edit Hours for ${data.day} `}
      visible={visible}
      footer={null}
      onCancel={closeModal}
    >
      {form}
    </Modal>
  );
}
