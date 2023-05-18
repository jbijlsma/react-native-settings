import Item from "./Item";

import SingleSelectSetting from "./items/SingleSelectSetting";
import SingleSelectOptionItem from "./items/SingleSelectOptionItem";
import UnknownItem from "./items/UnknownItem";
import SettingPageLink from "./items/SettingPageLink";
import InlineSwitchSetting from "./items/InlineSwitchSetting";
import LoginSetting from "./items/LoginSetting";

function ItemGroup({ items, itemKeyExtractor, isOptionSelected, onPress }) {
  const numberOfItems = items.length;
  const lastItemIndex = items.length - 1;

  function createItemContent(item) {
    switch (item.type) {
      case "SettingLogin":
        return LoginSetting();
      case "SettingInlineSwitch":
        return { right: <InlineSwitchSetting setting={item} /> };
      case "SettingPageLink":
        return { right: <SettingPageLink setting={item} /> };
      case "SingleSelectSetting":
        return {
          right: (
            <SingleSelectSetting
              settingName={item.name}
              settingTitle={item.title}
            />
          ),
        };
      case "SingleSelectOptionItem":
        const isSelected = isOptionSelected(item);
        return {
          right: (
            <SingleSelectOptionItem
              setting={item}
              isSelected={isSelected}
            />
          ),
        };
      default:
        console.log("default");
        return { right: <UnknownItem item={item} /> };
    }
  }

  function onPressHandler(item, itemContent) {
    onPress(item, itemContent);
  }

  return items.map((item, index) => {
    const hasPrevSibbling = numberOfItems > 0 && index > 0;
    const hasNextSibbling = numberOfItems > 0 && index < lastItemIndex;

    const itemContent = createItemContent(item);

    return (
      <Item
        key={itemKeyExtractor(item)}
        item={item}
        hasPrevSibbling={hasPrevSibbling}
        hasNextSibbling={hasNextSibbling}
        isPressable={item.isPressable}
        onPress={() => onPressHandler(item, itemContent)}
        itemContent={itemContent}
      ></Item>
    );
  });
}

export default ItemGroup;
