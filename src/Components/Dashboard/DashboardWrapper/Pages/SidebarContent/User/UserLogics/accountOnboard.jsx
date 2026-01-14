import Reset from '@mui/icons-material/RotateLeft';
import Right from '@mui/icons-material/ArrowCircleRight';
import Left from '@mui/icons-material/ArrowCircleLeft';
import Folder from '@mui/icons-material/FolderOpen';
import { useMemo, useState } from "react";
import { colors } from '../../../../../../Utils/styles';

const AccountOnboard = ({ allAccounts, selectedAccounts, setSelectedAccounts }) => {

    console.log(allAccounts);

    const [search, setSearch] = useState("");
    const [selectedLeft, setSelectedLeft] = useState([]);
    const [selectedRight, setSelectedRight] = useState([]);

    const safeAllAccounts = useMemo(() =>
        Array.isArray(allAccounts) ? allAccounts : [], [allAccounts]
    );

    /** Available = all - selected */
    const available = useMemo(() => {
        const assignedSet = new Set(selectedAccounts);
        return safeAllAccounts.filter(acc => !assignedSet.has(acc.accountId));
    }, [safeAllAccounts, selectedAccounts]);

    /** Search filter */
    const filteredAvailable = useMemo(() => {
        return available.filter(acc =>
            acc?.accName?.toLowerCase().includes(search.toLowerCase())
        );
    }, [available, search]);

    /** Move Left → Right */
    const moveRight = () => {
        setSelectedAccounts(prev => [...new Set([...prev, ...selectedLeft])]);
        setSelectedLeft([]);
    };

    /** Move Right → Left */
    const moveLeft = () => {
        setSelectedAccounts(prev =>
            prev.filter(id => !selectedRight.includes(id))
        );
        setSelectedRight([]);
    };

    /** Reset Everything */
    const resetAll = () => {
        setSelectedAccounts([]);
        setSelectedLeft([]);
        setSelectedRight([]);
        setSearch("");
    };

    return (
        <div className="w-full">
            {/* HEADER */}
            <div className="flex gap-2 bg-white text-xl font-bold mb-2">
                <h1>Manage Account Id(s)</h1>
                <span>|</span>
                <h1
                    className="text-gray-500 cursor-pointer flex items-center gap-1"
                    onClick={resetAll}
                >
                    <Reset fontSize="small" /> Reset
                </h1>
            </div>

            <div className="flex p-2 w-full bg-white border border-gray-300">

                {/* LEFT PANEL */}
                <div className="w-1/2 border border-gray-400">
                    <div className="flex justify-between bg-blue-100 p-2">
                        <h1 className="font-bold text-md">
                            Choose Account IDs to Associate
                        </h1>
                        <h1 style={{ color: colors.bgCol }}>
                            {available.length} Available
                        </h1>
                    </div>

                    <div className="h-80 overflow-y-auto">
                        {filteredAvailable.length > 0 ? (
                            filteredAvailable.map(account => (
                                <div
                                    key={account.accountId}
                                    className="flex gap-2 even:bg-white odd:bg-gray-100 border border-gray-200 p-2"
                                >
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={selectedLeft.includes(account.accountId)}
                                            onChange={(e) => {
                                                setSelectedLeft(prev =>
                                                    e.target.checked
                                                        ? [...prev, account.accountId]
                                                        : prev.filter(id => id !== account.accountId)
                                                );
                                            }}
                                        />
                                        {account.accName} ({account.accountId})
                                    </label>
                                </div>
                            ))
                        ) : (
                            <div className="text-center text-gray-500 p-5">
                                No available accounts
                            </div>
                        )}
                    </div>
                </div>

                {/* SWITCH BUTTONS */}
                <div className="flex items-center m-5">
                    <div className="flex flex-col">
                        <button
                            onClick={moveRight}
                            disabled={!selectedLeft.length}
                        >
                            <Right fontSize="large" style={{ color: colors.bgCol, marginBottom: 20 }} />
                        </button>

                        <button
                            onClick={moveLeft}
                            disabled={!selectedRight.length}
                        >
                            <Left fontSize="large" style={{ color: colors.bgCol }} />
                        </button>
                    </div>
                </div>

                {/* RIGHT PANEL */}
                <div className="w-1/2 border border-gray-400">
                    {selectedAccounts.length > 0 ? (
                        <>
                            <div className="flex justify-between bg-blue-100 p-2">
                                <h1 className="font-bold text-lg">
                                    Associated Account IDs
                                </h1>
                                <h1 style={{ color: colors.bgCol }}>
                                    {selectedAccounts.length} Added
                                </h1>
                            </div>

                            <div className="h-80 overflow-y-auto">
                                {selectedAccounts.map(accountId => {
                                    const acc = safeAllAccounts.find(
                                        a => a.accountId === accountId
                                    );

                                    return (
                                        <div
                                            key={accountId}
                                            className="flex gap-2 even:bg-white odd:bg-gray-100 border border-gray-200 p-2"
                                        >
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedRight.includes(accountId)}
                                                    onChange={(e) => {
                                                        setSelectedRight(prev =>
                                                            e.target.checked
                                                                ? [...prev, accountId]
                                                                : prev.filter(id => id !== accountId)
                                                        );
                                                    }}
                                                />
                                                {acc?.accName || "Unknown"} ({accountId})
                                            </label>
                                        </div>
                                    );
                                })}
                            </div>
                        </>
                    ) : (
                        <div className="flex justify-center items-center h-full w-full">
                            <div className="flex flex-col items-center text-center gap-2">
                                <Folder style={{ fontSize: "8rem", color: "#9ca3af" }} />
                                <h1 className="text-lg font-semibold">
                                    No Account IDs
                                </h1>
                                <span className="text-gray-600">
                                    Selected Account IDs will be shown here.
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AccountOnboard;
