import OptionGroupItem from "./OptionGroupItem";

function OptionGroup({ settings }) {
  const numberOfSettings = settings.length;
  const lastSettingIndex = settings.length - 1;

  return settings.map((setting, index) => {
    const hasPrevSibbling = numberOfSettings > 0 && index > 0;
    const hasNextSibbling = numberOfSettings > 0 && index < lastSettingIndex;

    return (
      <OptionGroupItem
        key={setting.name}
        setting={setting}
        index={index}
        hasPrevSibbling={hasPrevSibbling}
        hasNextSibbling={hasNextSibbling}
      />
    );
  });
}

export default OptionGroup;
