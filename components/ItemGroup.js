import Item from "./Item";

import SingleSelectSetting from "./items/SingleSelectSetting";
import SingleSelectOptionItem from "./items/SingleSelectOptionItem";
import UnknownItem from "./items/UnknownItem";
import SettingPageLink from "./items/SettingPageLink";
import InlineSwitchSetting from "./items/InlineSwitchSetting";

function ItemGroup({ items, itemKeyExtractor, isOptionSelected, onPress }) {
  const numberOfItems = items.length;
  const lastItemIndex = items.length - 1;

  function createItemImplementation(item) {
    switch (item.type) {
      case "SettingInlineSwitch":
        return <InlineSwitchSetting setting={item} />;
      case "SettingPageLink":
        return <SettingPageLink setting={item} />;
      case "SingleSelectSetting":
        return (
          <SingleSelectSetting
            settingName={item.name}
            settingTitle={item.title}
          />
        );
      case "SingleSelectOptionItem":
        const isSelected = isOptionSelected(item);
        return (
          <SingleSelectOptionItem
            setting={item}
            isSelected={isSelected}
          />
        );
      default:
        console.log("default");
        return <UnknownItem item={item} />;
    }
  }

  function onPressHandler(item) {
    onPress(item);
  }

  return items.map((item, index) => {
    const hasPrevSibbling = numberOfItems > 0 && index > 0;
    const hasNextSibbling = numberOfItems > 0 && index < lastItemIndex;

    return (
      <Item
        key={itemKeyExtractor(item)}
        item={item}
        hasPrevSibbling={hasPrevSibbling}
        hasNextSibbling={hasNextSibbling}
        isPressable={item.isPressable}
        onPress={() => onPressHandler(item)}
      >
        {createItemImplementation(item)}
      </Item>
    );
  });
}

export default ItemGroup;
