import {Button, TreeSelect} from 'antd';
import React, {Component} from 'react';

const {TreeNode} = TreeSelect;

export class Demo extends Component {
    state = {
        valueDefault: [],
    };

    onChange = value => {
        console.log(this.state.valueDefault);
        console.log(value);
        this.setState({
            value,
            valueDefault: value,
        });
    };

    render() {
        const cardTitle = this.state.valueDefault.map(el => el.label).join(', ')

        return (
            <main>
                <TreeSelect
                    labelInValue
                    showSearch
                    style={{width: '40%'}}
                    value={this.state.valueDefault}
                    dropdownStyle={{maxHeight: 400, overflow: 'auto'}}
                    placeholder="Please select"
                    multiple
                    treeDefaultExpandAll
                    onChange={this.onChange}
                >
                    <TreeNode value="Хлеб" title="Хлеб">
                        <TreeNode value="Масло" title="Масло">
                            <TreeNode value="Сыр" title="Сыр"/>
                            <TreeNode value="Молоко" title="Молоко"/>
                        </TreeNode>
                        <TreeNode value="Пряник" title="Пряник">
                            <TreeNode value="Овощи" title="Овощи">Овощи</TreeNode>
                        </TreeNode>
                    </TreeNode>
                </TreeSelect>
                <Button type="primary" onClick={() => {
                    this.props.updateData(cardTitle)
                }}>
                    Отправить
                </Button>
            </main>
        );
    }
}
